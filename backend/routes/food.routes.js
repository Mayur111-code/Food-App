// routes/food.routes.js
const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload.middleware");
const { protect, isRestaurant } = require("../middleware/auth.middleware");
const foodCtrl = require("../controllers/food.controller");

// Restaurant Owner
router.post(
  "/add",
  protect,
  isRestaurant,
  upload.single("image"),
  foodCtrl.addFood
);

// User Side
router.get(
  "/restaurant/:restaurantId",
  protect,
  foodCtrl.getFoodsByRestaurant
);

// Restaurant Owner
router.delete(
  "/:id",
  protect,
  isRestaurant,
  foodCtrl.deleteFood
);

module.exports = router;
