import mongoose from "mongoose";
import Classroom from "./Classroom.js";

const suggestionSchema = mongoose.Schema({
    title :{
        type : String,
        required: true
    },

    content: {
        type : String,
        required: true
    },

    classroom:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Classroom"
    },

    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    votes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]},

    {timestamps:true}

)

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

export default Suggestion;
