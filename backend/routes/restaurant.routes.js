// routes/restaurant.routes.js
const express = require("express");
const router = express.Router();

const {
  createRestaurant,
  getMyRestaurant,
  updateRestaurant,
  getAllRestaurants
} = require("../controllers/restaurant.controller");

const { protect, isRestaurant } = require("../middleware/auth.middleware");

// Restaurant Owner
router.post("/create", protect, isRestaurant, createRestaurant);
router.get("/me", protect, isRestaurant, getMyRestaurant);
router.put("/update", protect, isRestaurant, updateRestaurant);

// User Side
router.get("/all", protect, getAllRestaurants);

module.exports = router;
