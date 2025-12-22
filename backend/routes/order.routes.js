// routes/order.routes.js
const express = require("express");
const router = express.Router();

const {
  placeOrder,
  getUserOrders,
  getRestaurantOrders,
  updateOrderStatus
} = require("../controllers/order.controller");

const { protect, isUser, isRestaurant } = require("../middleware/auth.middleware");

// User
router.post("/place", protect, isUser, placeOrder);
router.get("/my", protect, isUser, getUserOrders);

// Restaurant
router.get("/restaurant", protect, isRestaurant, getRestaurantOrders);
router.put(
  "/:id/status",
  protect,
  isRestaurant,
  updateOrderStatus
);

module.exports = router;
