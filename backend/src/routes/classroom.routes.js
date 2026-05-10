import express from "express";
import { getClassrooms, createClassroom, joinClassroom, getClassroomById,deleteClassroom, enterClassroom  } from "../controllers/classroom.controller.js";
import { isCreator, protectRoutes, isMember, isAuthor, isCreatorOrAuthor } from "../middleware/auth.middleware.js";
import { createSuggestion, deleteSuggestion, getSuggestions, voteOnSuggestion, pinSuggestion } from "../controllers/suggestion.controller.js";

const router = express.Router();

router.use(protectRoutes)
router.get("/", getClassrooms);
router.post("/", createClassroom);
router.post("/:classId/join", joinClassroom);
router.post("/:classId/enter", enterClassroom);
router.get("/:classId", getClassroomById)
router.delete("/:classId", isCreator,deleteClassroom);;
router.get("/:classId/suggestions",isMember, getSuggestions);
router.post("/:classId/suggestions",isMember, createSuggestion);
router.delete("/:classId/suggestions/:suggestionId",isCreatorOrAuthor, deleteSuggestion);
router.post("/:classId/suggestions/:suggestionId/vote", isMember,voteOnSuggestion);
router.post("/:classId/suggestions/:suggestionId/pin", isCreator,pinSuggestion);


export default router;