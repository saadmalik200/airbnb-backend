const mongoose = require("mongoose");

module.exports = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.URI);
    console.log("Connected to DB!");
  } catch (error) {
    console.log("Error connecting to the DB", error.message);

    process.exit(1);
  }
};
