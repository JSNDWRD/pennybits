import express from "express";
import mongoose from "mongoose";
import transactionRoutes from "./routes/transactionRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

mongoose.set("strictQuery", false);

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(transactionRoutes);

const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log(error.message);
  });

// Start server
app.listen(process.env.PORT, () => {
  try {
    console.log("Connected");
  } catch (error) {
    console.log(error.message);
  }
});
