import mongoose from "mongoose";

const classroomSchema = mongoose.Schema({
    name :{
        type: String,
        required: true,
        
    },
    code :{
        type: String,
        required: true,
        unique: true
    },

    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },

    suggestions : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Suggestion"
    }],

    members : [{
        type :mongoose.Schema.Types.ObjectId,
        ref : "User"
    }]},

    {timestamps: true});

    const Classroom =  mongoose.model("Classroom", classroomSchema);

    export default Classroom;    
    