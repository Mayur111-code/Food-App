// models/Restaurant.model.js
const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  restaurantName: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  address: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  image: {
    type: String // Cloudinary URL
  }

}, { timestamps: true });

module.exports = mongoose.model("Restaurant", restaurantSchema);
