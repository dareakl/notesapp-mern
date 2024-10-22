import jwt from "jsonwebtoken";
import User from "../models/User.js";

const middleware = async (req, res, next) => {
  try {
    // Check for token in headers
    const token = req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : null;

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // Verify the token
    const decoded = jwt.verify(token, "qwerty1234567890@#");

    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Token not valid" });
    }

    // Find the user by ID from the decoded token
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "No user found" });
    }

    // Attach user info to request
    req.user = { name: user.name, id: user._id };
    next();
  } catch (error) {
    // Handle token verification errors
    return res.status(500).json({ success: false, message: "Please login" });
  }
};

export default middleware;
