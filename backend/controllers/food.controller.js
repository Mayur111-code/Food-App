// controllers/food.controller.js
const Food = require("../models/Food.model");
const Restaurant = require("../models/Restaurant.model");
const cloudinary = require("../config/cloudinary");

// ADD FOOD
exports.addFood = async (req, res) => {
  const restaurant = await Restaurant.findOne({ owner: req.user.id });
  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant not found" });
  }

  let imageUrl = "";
  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "food-app/foods"
    });
    imageUrl = result.secure_url;
  }

  const food = await Food.create({
    restaurant: restaurant._id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: imageUrl
  });

  res.status(201).json(food);
};

// GET FOODS BY RESTAURANT
exports.getFoodsByRestaurant = async (req, res) => {
  const foods = await Food.find({ restaurant: req.params.restaurantId });
  res.json(foods);
};

// DELETE FOOD
exports.deleteFood = async (req, res) => {
  await Food.findByIdAndDelete(req.params.id);
  res.json({ message: "Food deleted" });
};
