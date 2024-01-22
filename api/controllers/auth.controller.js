import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res //response
      .status(201)
      .json({ message: "User signed up successfully", user: newUser });
  } catch (error) {
   next(error);
  }
};