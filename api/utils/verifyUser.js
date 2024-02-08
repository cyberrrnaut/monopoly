import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  
  console.log(req);
 
  if (!token) return next(401, "Unauthorized access");

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return next(errorHandler(403, "Forbidden"));
    req.user = user;
    next();
  });
};
