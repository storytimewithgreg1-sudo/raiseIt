import express from "express";
import { signup, login, logout, getAuthUser } from "../controllers/auth.controller.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/authuser", getAuthUser);

export default router;