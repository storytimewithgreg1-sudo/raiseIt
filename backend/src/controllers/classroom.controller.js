import Classroom from "../models/Classroom.js"

export const getClassrooms = async (req,res) => {
    try {
        const classrooms = await Clasroom.find()

        res.status(200).json(classrooms)
    } catch (error) {
        console.log("Error in getclassRooms controller", error);
        res.status(500).json({message:"Internal server error"})
        
    }
}

export const createClassroom = async (req,res) => {
    try {
        
        const {name, code} = req.body;

        if (!name || !code){
            return res.status(400).json({message:"All Fields Are Required"})
        }
        const userId = req.user._id;

        const newClassroom = new Classroom({
            name,
            code,
            createdBy: userId,
            members: userId
        });

        await newClassroom.save();

        res.status(201).json(newClassroom)



    } catch (error) {
        console.log("Error in createClassroom controller", error);
        res.status(500).json({message:"Internal server error"})
    }
}

export const getClassroomById = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

export const deleteClassroom = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}