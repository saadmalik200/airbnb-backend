const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    console.log("Hello from auth");

    const token = req.cookies["token"];

    console.log("🚀 ~ module.exports= ~ cookies", token);

    const decoded = jwt.verify(token, process.env.JWT);
    console.log("🚀 ~ module.exports= ~ decoded", decoded);

    req.user = decoded.id;

    next(); // calls the next function in the pipeline
  } catch (error) {
    console.log("🚀 ~ auth error", error.message);

    res.send({ success: false, error: error.message });
  }
};
