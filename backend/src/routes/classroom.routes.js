import express from "express";
import { getClassrooms, createClassroom, getClassroomById,deleteClassroom } from "../controllers/classroom.controller.js";
import { protectRoutes } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protectRoutes)
router.get("/", getClassrooms);
router.post("/", createClassroom);
router.get("/:id", getClassroomById);
router.delete("/:id", deleteClassroom);

export default router;