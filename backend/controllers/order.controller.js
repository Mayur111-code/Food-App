// controllers/order.controller.js
const Order = require("../models/Order.model");
const Food = require("../models/Food.model");
const Restaurant = require("../models/Restaurant.model");

// PLACE ORDER (User)
exports.placeOrder = async (req, res) => {
  const { foodId, quantity } = req.body;

  const food = await Food.findById(foodId);
  if (!food) {
    return res.status(404).json({ message: "Food not found" });
  }

  const restaurant = await Restaurant.findById(food.restaurant);

  const order = await Order.create({
    user: req.user.id,
    restaurant: restaurant._id,
    food: food._id,
    quantity
  });

  res.status(201).json(order);
};

// USER ORDERS
exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id })
    .populate("food", "name price image")
    .populate("restaurant", "restaurantName");

  res.json(orders);
};

// RESTAURANT ORDERS
exports.getRestaurantOrders = async (req, res) => {
  const restaurant = await Restaurant.findOne({ owner: req.user.id });

  const orders = await Order.find({ restaurant: restaurant._id })
    .populate("user", "name")
    .populate("food", "name price");

  res.json(orders);
};

// UPDATE ORDER STATUS (Restaurant)
exports.updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json(order);
};
