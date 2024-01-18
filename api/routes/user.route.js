import express from "express";
import { testfunc } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/test',testfunc);



export default router;