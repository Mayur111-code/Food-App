// controllers/likeSave.controller.js
const Like = require("../models/Like.model");
const Save = require("../models/Save.model");

// LIKE / UNLIKE
exports.toggleLike = async (req, res) => {
  const exists = await Like.findOne({
    user: req.user.id,
    food: req.params.foodId
  });

  if (exists) {
    await exists.deleteOne();
    return res.json({ message: "Unliked" });
  }

  await Like.create({
    user: req.user.id,
    food: req.params.foodId
  });

  res.json({ message: "Liked" });
};

// SAVE / UNSAVE
exports.toggleSave = async (req, res) => {
  const exists = await Save.findOne({
    user: req.user.id,
    food: req.params.foodId
  });

  if (exists) {
    await exists.deleteOne();
    return res.json({ message: "Unsaved" });
  }

  await Save.create({
    user: req.user.id,
    food: req.params.foodId
  });

  res.json({ message: "Saved" });
};

// USER LIKED FOODS
exports.getLikedFoods = async (req, res) => {
  const likes = await Like.find({ user: req.user.id })
    .populate("food", "name price image");

  res.json(likes);
};

// USER SAVED FOODS
exports.getSavedFoods = async (req, res) => {
  const saves = await Save.find({ user: req.user.id })
    .populate("food", "name price image");

  res.json(saves);
};
