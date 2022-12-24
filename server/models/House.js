const mongoose = require("mongoose");

const { Schema } = mongoose;

const houseSchema = new Schema({
  title: {
    type: String,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  housecat: {
    type: String,
    required: true,
  },
  housetype: {
    type: String,
    required: true,
  },
  housetitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  superhost: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  img1: {
    type: String,
    required: true,
    unique: true,
  },
  img2: {
    type: String,
    required: true,
    unique: true,
  },
  img3: {
    type: String,
    required: true,
    unique: true,
  },
  img4: {
    type: String,
    required: true,
    unique: true,
  },
  img5: {
    type: String,
    required: true,
    unique: true,
  },
  guests: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: String,
    required: true,
  },
  beds: {
    type: String,
    required: true,
  },
  bathrooms: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("House", houseSchema);
