import express from "express";
import { getClassrooms, createClassroom, joinClassroom, getClassroomById,deleteClassroom } from "../controllers/classroom.controller.js";
import { isCreator, protectRoutes, isMember, isAuthor } from "../middleware/auth.middleware.js";
import { createSuggestion, deleteSuggestion, getSuggestions, voteOnSuggestion } from "../controllers/suggestion.controller.js";

const router = express.Router();

router.use(protectRoutes)
router.get("/", getClassrooms);
router.post("/", createClassroom);
router.post("/:classId/join", joinClassroom);
router.get("/:classId", getClassroomById)
router.delete("/:classId", isCreator,deleteClassroom);;
router.get("/:classId/suggestions",isMember, getSuggestions);
router.post("/:classId/suggestions",isMember, createSuggestion);
router.delete("/:classId/suggestions/:suggestionId",isCreator, isAuthor, deleteSuggestion);
router.post("/:classId/suggestions/:suggestionId/vote", isMember,voteOnSuggestion);


export default router;