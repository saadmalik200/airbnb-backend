const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  wishlist: [{ type: Schema.Types.ObjectId, ref: "House" }],
});

module.exports = mongoose.model("User", userSchema);
