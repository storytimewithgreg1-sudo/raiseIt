import Classroom from "../models/Classroom.js";
import Suggestion from "../models/Suggestion.js";

export const getSuggestions = async (req,res) => {
    try {
        const userId = req.user._id;
        const classId = req.params.classId;
      
        const classroom = await Classroom.findById(classId ).populate("suggestions");

        res.json(classroom.suggestions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export const createSuggestion = async (req,res) => {
    try {
        const {title, content} = req.body;
        const userId = req.user._id;
        const classId = req.params.classId;

        if(!title || !content){
            return res.status(400).json({message:"Title and content are required"})
        }

        const newSuggestion = new Suggestion({
            title,
            content,
            createdBy: userId,
            classroom: classId
        });

        await newSuggestion.save();

        const classroom = await Classroom.findById(classId);
        classroom.suggestions.push(newSuggestion._id);
        await classroom.save();

       

        res.status(201).json(newSuggestion);
    } catch (error) {
        console.log("Error in createSuggestion controller", error)
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