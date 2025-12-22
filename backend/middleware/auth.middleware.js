// middleware/auth.middleware.js
const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer")) {
    token = token.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // id + role
      next();
    } catch (err) {
      return res.status(401).json({ message: "Token invalid" });
    }
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};

// ROLE CHECK
exports.isRestaurant = (req, res, next) => {
  if (req.user.role !== "restaurant") {
    return res.status(403).json({ message: "Restaurant access only" });
  }
  next();
};

exports.isUser = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(403).json({ message: "User access only" });
  }
  next();
};
