import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type:String,
      default:"https://i.pinimg.com/474x/ff/e3/d7/ffe3d7c5bb9b97cfae7f3d0245998935.jpg"
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
