// controllers/auth.controller.js
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// REGISTER
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role
  });

  res.status(201).json({
    message: "Registered successfully",
    token: generateToken(user._id, user.role),
    role: user.role
  });
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    token: generateToken(user._id, user.role),
    role: user.role
  });
};
