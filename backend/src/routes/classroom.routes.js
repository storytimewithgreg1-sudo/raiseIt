import express from "express";
import { getClassrooms, createClassroom, getClassroomById,deleteClassroom } from "../controllers/classroom.controller.js";


const router = express.Router();

router.get("/", getClassrooms);
router.post("/", createClassroom);
router.get("/:id", getClassroomById);
router.delete("/:id", deleteClassroom);

export default router;