import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {

    next(errorHandler(401, "Unauthorized"));
  }
  try {
    const user = await jwt.verify(token, process.env.JWT_SECRET);
    // console.log(userDetails);
    req.user = user;

    next();
  } catch (err) {
    next(errorHandler(401, "Unauthorized"));
    
 
  }

  
};
