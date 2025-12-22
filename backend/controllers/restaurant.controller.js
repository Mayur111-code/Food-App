// controllers/restaurant.controller.js
const Restaurant = require("../models/Restaurant.model");

// CREATE PROFILE
exports.createRestaurant = async (req, res) => {
  const exists = await Restaurant.findOne({ owner: req.user.id });
  if (exists) {
    return res.status(400).json({ message: "Restaurant already exists" });
  }

  const restaurant = await Restaurant.create({
    owner: req.user.id,
    ...req.body
  });

  res.status(201).json(restaurant);
};

// GET OWN PROFILE
exports.getMyRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findOne({ owner: req.user.id });

  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant not found" });
  }

  res.json(restaurant);
};

// UPDATE PROFILE
exports.updateRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findOneAndUpdate(
    { owner: req.user.id },
    req.body,
    { new: true }
  );

  res.json(restaurant);
};

// GET ALL RESTAURANTS (User side)
exports.getAllRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find().populate("owner", "name");
  res.json(restaurants);
};
