import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import middleware from "../middleware/middleware.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(401)
        .json({ sucess: false, message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    await newUser.save();
    return res
      .status(200)
      .json({ success: true, message: "Account Created Successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, messageL: "Error in Adding Use" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not exists" });
    }
    const checkpassword = await bcrypt.compare(password, user.password);
    if (!checkpassword) {
      return res
        .status(401)
        .json({ success: false, message: "Wrong Credentials" });
    }
    const token = jwt.sign({ id: user._id }, "qwerty1234567890@#", {
      expiresIn: "5h",
    });
    return res.status(200).json({
      success: true,
      token,
      user: { name: user.name },
      message: "Login Successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error in Login" });
  }
});

router.get("/verify", middleware, async (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
});
export default router;
