import express from "express"
import { getSuggestions, createSuggestion,getSuggestionById, deleteSuggestion } from "../controllers/suggestion.controller.js";

const router = express.Router();

router.get("/", getSuggestions);
router.post("/", createSuggestion);
router.get("/", getSuggestionById);
router.delete("/", deleteSuggestion)

export default router;