// routes/user.routes.js
const express = require("express");
const router = express.Router();

const {
  getMyProfile,
  updateProfile,
  deleteAccount
} = require("../controllers/user.controller");

const { protect, isUser } = require("../middleware/auth.middleware");

router.get("/me", protect, isUser, getMyProfile);
router.put("/update", protect, isUser, updateProfile);
router.delete("/delete", protect, isUser, deleteAccount);

module.exports = router;
