// routes/likeSave.routes.js
const express = require("express");
const router = express.Router();

const {
  toggleLike,
  toggleSave,
  getLikedFoods,
  getSavedFoods
} = require("../controllers/likeSave.controller");

const { protect, isUser } = require("../middleware/auth.middleware");

router.post("/like/:foodId", protect, isUser, toggleLike);
router.post("/save/:foodId", protect, isUser, toggleSave);

router.get("/likes", protect, isUser, getLikedFoods);
router.get("/saves", protect, isUser, getSavedFoods);

module.exports = router;
