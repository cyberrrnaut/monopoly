import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Mongo DB connected!!");
  })
  .catch((error) => {
    console.log("Database Error: ", error);
  });

const app = express();

app.use(express.json()); // to send json data to server

app.listen(3000, () => {
  console.log("Port is listening on port 3000");
});
//apis
app.use("/api/user", userRouter);

app.use("/api/auth", authRouter);

//middlewares

//middleware to send status code
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
