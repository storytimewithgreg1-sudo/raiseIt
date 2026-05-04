import Classroom from "../models/Classroom.js";

export const getSuggestions = async (req,res) => {
    try {
        const classId = req.params.id;
        const classroom = await Classroom.findById(classId ).populate("suggestions");
        res.json(classroom.suggestions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createSuggestion = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

export const getSuggestionById = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

export const deleteSuggestion = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

export const voteOnSuggestion = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}