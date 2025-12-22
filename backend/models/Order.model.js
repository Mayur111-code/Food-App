// models/Order.model.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },

  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
    required: true
  },

  quantity: {
    type: Number,
    default: 1
  },

  status: {
    type: String,
    enum: ["pending", "accepted", "completed"],
    default: "pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
