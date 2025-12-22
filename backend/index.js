const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load env variables
dotenv.config();

// DB connection
const connectDB = require("./config/db");

// Route imports
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const foodRoutes = require("./routes/food.routes");
const orderRoutes = require("./routes/order.routes");
const likeSaveRoutes = require("./routes/likeSave.routes");

// App init
const app = express();

// Connect DB
connectDB();

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", // Vite default
  credentials: true
}));
;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/likes", likeSaveRoutes);

// Root test route
app.get("/", (req, res) => {
  res.send("🚀 Food App Backend Running");
});

// Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
