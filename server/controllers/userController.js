const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SALT_ROUNDS = 10;
const sendEmail = require("../utilities/email.js");
// module.exports = function register () {}

module.exports.register = async (req, res) => {
  try {
    console.log("Hello from register", req.body);

    const salt = await bcrypt.genSalt(SALT_ROUNDS);

    const hashesPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashesPass;
    const user = await User.create(req.body);

    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: "1h",
    });

    sendEmail(token);
    res.send({ success: true, user });
  } catch (error) {
    console.log("🚀 ~ register error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    console.log("Hello from login", req.body);

    // User.find(some object) RETURNS AN ARRAY
    // User.findONe(some object) RETURNS AN OBJECT
    const user = await User.findOne({ phone: req.body.phone }).select("-__v");

    // const user = await User.find({
    //     email: req.body.email,
    //     password: req.body.password
    // })

    console.log("🚀 ~ user", user);

    if (!user) return res.send({ success: false, errorId: 1 });
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) return res.send({ success: false, errorId: 1 });

    const newUser = user.toObject();
    delete newUser.password;

    // jwt token
    const token = jwt.sign(
      { id: user._id, phone: user.phone },
      process.env.JWT,
      {
        expiresIn: "1hr",
      }
    );
    res.cookie("token", token);
    console.log(newUser);
    res.send({ success: true, user: newUser });
  } catch (error) {
    console.log("🚀 ~ login error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.list = async (req, res) => {
  try {
    console.log("Hello from list");

    const users = await User.find().select("-password -__v");
    console.log("🚀 ~ module.exports.list= ~ users", users);

    // THIS IS THE RESPONSE TO THE CLIENT
    res.send({ success: true, users });
  } catch (error) {
    console.log("🚀 ~ list error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.delete = async (req, res) => {
  try {
    console.log("Hello from delete", req.params);

    const deletedUser = await User.findByIdAndDelete(req.params._id);
    console.log("🚀 ~ module.exports.delete ~ deletedUser", deletedUser);

    if (!deletedUser) return res.send({ success: false, errorId: 1 });

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ delete error", error.message);

    res.send({ success: false, error: error.message });
  }
};
// module.exports = {register, login}

//////////////////////////////// WishList ///////////////////

module.exports.addToWishlist = async (req, res) => {
  try {
    console.log("Hello from add to wishlist", req.body);

    const user = await User.findByIdAndUpdate(
      { _id: req.body.user },
      {
        $push: {
          wishlist: req.body.house,
        },
      },
      { new: true }
    );
    console.log("🚀 ~ module.exports.addToWishlist= ~ user", user);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ add to wishlist error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.removeFromWishlist = async (req, res) => {
  try {
    console.log("Hello from remove from wishlist", req.body);

    const user = await User.findById(req.body.user);

    const wishlist = user.wishlist.filter((item) => {
      return item.toString() !== req.body.house;
    });

    console.log("🚀 ~ module.exports.removeFromWishlist= ~ wishlist", wishlist);

    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.body.user },
      { wishlist },
      { new: true }
    );
    console.log(
      "🚀 ~ module.exports.removeFromWishlist= ~ updatedUser",
      updatedUser
    );

    res.send({ success: true, wishlist });
  } catch (error) {
    console.log("🚀 ~ remove from wishlist error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.listWishlist = async (req, res) => {
  try {
    console.log("Hello from list wishlist", req.params);

    const user = await User.findById(req.params.user).populate({
      path: "wishlist",
      select: "-__v",
    });

    console.log("🚀 ~ module.exports.listWishlist= ~ user", user);

    res.send({ success: true, houses: user.wishlist });
  } catch (error) {
    console.log("🚀 ~ list wishlist error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.emailConfirm = async (req, res) => {
  try {
    console.log("🚀 ~ hello emailConfirm ", req.body);

    const token = req.body.token;

    const decoded = jwt.verify(token, process.env.JWT);
    console.log("🚀 ~ emailConfirm ~ decoded", decoded);

    const user = await User.findByIdAndUpdate(
      { _id: decoded.id },
      { verified: true },
      { new: true }
    );
    console.log("🚀 ~ emailConfirm ~ user", user);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ emailConfirm ~ error", error.message);

    res.send({ success: false, error: error.message });
  }
};
