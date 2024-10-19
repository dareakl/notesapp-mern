import express from "express";
import cors from "cors";
import connectToMongoDB from "./db/db.js";

import authRouter from "./routes/auth.js";

const app = express();
// Set up CORS to allow requests from your frontend
const corsOptions = {
  origin: "http://localhost:5173", // Allow your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow credentials (if needed)
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(5002, () => {
  connectToMongoDB();
  console.log("Server is running");
});
