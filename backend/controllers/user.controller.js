// controllers/user.controller.js
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");

// GET MY PROFILE
exports.getMyProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};

// UPDATE PROFILE
exports.updateProfile = async (req, res) => {
  const { name, email, password } = req.body;

  const updateData = { name, email };

  if (password) {
    updateData.password = await bcrypt.hash(password, 10);
  }

  const user = await User.findByIdAndUpdate(
    req.user.id,
    updateData,
    { new: true }
  ).select("-password");

  res.json(user);
};

// DELETE ACCOUNT
exports.deleteAccount = async (req, res) => {
  await User.findByIdAndDelete(req.user.id);
  res.json({ message: "Account deleted successfully" });
};
