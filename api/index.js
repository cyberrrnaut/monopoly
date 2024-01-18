import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";

dotenv.config();


 mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Mongo DB connected!!");
})
.catch((error)=>{
    console.log("Database Error: ",error);
})

 

const app = express();

app.listen(3000, () => {
  console.log("Port is listening on port 3000");
});

app.use("/test/user",UserRouter);