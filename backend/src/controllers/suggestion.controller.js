import Classroom from "../models/Classroom.js";
import Suggestion from "../models/Suggestion.js";

export const getSuggestions = async (req,res) => {
    try {
        const userId = req.user._id;
        const classId = req.params.classId;
      
        const suggestions = await Suggestion.find({classroom: classId}).sort({isPinned: -1, votes: -1});

        res.json(suggestions);
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
            author: userId,
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



export const deleteSuggestion = async (req,res) => {
    try {
        
        const suggestionId = req.params.suggestionId;
        await Suggestion.findByIdAndDelete(suggestionId);

        const classId = req.params.classId;
        const updatedSuggestions = await Suggestion.find({classroom: classId});

        res.status(200).json(updatedSuggestions);
    
        
    } catch (error) {
        console.log("Error in deleteSuggestion controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const voteOnSuggestion = async (req,res) => {
    try {
        const userId = req.user._id;
        const suggestionId = req.params.suggestionId;
        const suggestion = await Suggestion.findById(suggestionId);

        if (suggestion.votes.includes(userId)){
            suggestion.votes.pull(userId);
            await suggestion.save();
            res.status(200).json({voteCount: suggestion.votes.length});
        }else{
            suggestion.votes.push(userId);
            await suggestion.save();
            res.status(200).json({voteCount: suggestion.votes.length});
        }

        
    } catch (error) {
        console.log("Error in voteOnSuggestion controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const pinSuggestion = async (req,res) => {
    try {
         const suggestionId = req.params.suggestionId;

         const suggestion = await Suggestion.findById(suggestionId);
          if(!suggestion){
            return res.status(400).json({message:"Suggestion does not exist"})
         }

         suggestion.isPinned = !suggestion.isPinned;

         if(suggestion.isPinned){
            suggestion.expiresAt = null;
         }else{
            suggestion.expiresAt = Date.now() + 7*24*60*60*1000;
         }

         await suggestion.save();

        

         res.status(200).json(suggestion);

    } catch (error) {
        console.log("Error in pinSuggestion controller", error);
        return res.status(500).json({message:"Internal server error"})
    }
}