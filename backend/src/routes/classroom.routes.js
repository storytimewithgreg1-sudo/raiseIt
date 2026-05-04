import express from "express";
import { getClassrooms, createClassroom, joinClassroom, getClassroomById,deleteClassroom } from "../controllers/classroom.controller.js";
import { isCreator, protectRoutes } from "../middleware/auth.middleware.js";
import { createSuggestion, deleteSuggestion, getSuggestions, voteOnSuggestion } from "../controllers/suggestion.controller.js";

const router = express.Router();

router.use(protectRoutes)
router.get("/", getClassrooms);
router.post("/", createClassroom);
router.post("/:id/join", joinClassroom);
router.get("/:id", getClassroomById)
router.delete("/:id", isCreator,deleteClassroom);;
router.get("/:classId/suggestions", getSuggestions);
router.post("/:classId/suggestions", createSuggestion);
router.delete("/:classId/suggestions/:suggestionId", deleteSuggestion);
router.post("/:classId/suggestions/:suggestionId/vote", voteOnSuggestion);


export default router;