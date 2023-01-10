const House = require("../models/House");

// module.exports = function register () {}

module.exports.register = async (req, res) => {
  try {
    console.log("Hello from register", req.body);

    await House.create(req.body);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ register error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.list = async (req, res) => {
  try {
    console.log("Hello from house list", req.query);

    //const houses = await House.find();
    const skip = req.query.skip === undefined ? 0 : Number(req.query.skip);
    const houses = await House.find().limit(3).skip(skip);
    const total = await House.countDocuments();
    console.log("skip,total", skip, total);

    if (!houses) return res.send({ success: false, errorId: 1 });
    res.send({ success: true, houses, total });
  } catch (error) {
    console.log("🚀 ~ house list error", error.message);

    res.send({ success: false, error: error.message });
  }
};

//// filter ///////////////

module.exports.search = async (req, res) => {
  try {
    console.log("search", req.body.housecat);
    const filter = {};

    if (req.body.housecat) {
      const regExp = new RegExp(req.body.housecat, "i");
      // console.log("🚀 ~ module.exports.search= ~ regExp", regExp)
      filter.housecat = regExp;
    }

    // if (req.body.minPrice > 0 || req.body.maxPrice > 0) {
    //   filter.price = {
    //     $gte: req.body.minPrice,
    //     $lte: req.body.maxPrice,
    //   };
    // }

    console.log("🚀 ~ module.exports.search= ~ filter", filter);

    const houses = await House.find(filter);

    console.log("🚀 ~ module.exports.search= ~ products", houses, total);

    res.send({ success: true, houses });
  } catch (error) {
    console.log("🚀 ~ product search error", error.message);

    res.send({ success: false, error: error.message });
  }
};
