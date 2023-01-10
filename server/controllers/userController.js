const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SALT_ROUNDS = 10;

// module.exports = function register () {}

module.exports.register = async (req, res) => {
  try {
    console.log("Hello from register", req.body);

    const salt = await bcrypt.genSalt(SALT_ROUNDS);

    const hashesPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashesPass;
    const user = await User.create(req.body);

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
        expiresIn: "1h",
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
