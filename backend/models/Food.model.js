// models/Food.model.js
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },

  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  description: {
    type: String
  },

  image: {
    type: String // Cloudinary URL
  }

}, { timestamps: true });

module.exports = mongoose.model("Food", foodSchema);
