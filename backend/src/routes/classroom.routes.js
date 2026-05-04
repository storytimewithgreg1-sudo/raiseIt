import express from "express";
import { getClassrooms, createClassroom, getClassroomById,deleteClassroom } from "../controllers/classroom.controller.js";
import { isCreator, protectRoutes } from "../middleware/auth.middleware.js";
import { createSuggestion, deleteSuggestion, getSuggestions, voteOnSuggestion } from "../controllers/suggestion.controller.js";

const router = express.Router();

router.use(protectRoutes)
router.get("/", getClassrooms);
router.post("/", createClassroom);
router.get("/:id", getClassroomById);
router.get("/:id/suggestions", getSuggestions);
router.post("/:id/suggestions", createSuggestion);
router.delete("/:id/suggestions/:suggestionId", deleteSuggestion);
router.delete("/:id/suggestions/:suggestionId/vote", voteOnSuggestion);
router.delete("/:id", isCreator,deleteClassroom);

export default router;