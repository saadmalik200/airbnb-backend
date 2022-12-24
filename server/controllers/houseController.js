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
    console.log("Hello from house list");

    const houses = await House.find();
    if (!houses) return res.send({ success: false, errorId: 1 });
    res.send({ success: true, houses });
  } catch (error) {
    console.log("🚀 ~ house list error", error.message);

    res.send({ success: false, error: error.message });
  }
};
