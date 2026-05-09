import express from "express";
import { signup, login, logout, getAuthUser } from "../controllers/auth.controller.js";
import { protectRoutes } from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check", protectRoutes,getAuthUser);

export default router;