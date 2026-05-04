import Classroom from "../models/Classroom.js"

export const getClassrooms = async (req,res) => {
    try {
        const classrooms = await Classroom.find()

        res.status(200).json(classrooms)
    } catch (error) {
        console.log("Error in getclassRooms controller", error);
        return res.status(500).json({message:"Internal server error"})
        
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
        return res.status(500).json({message:"Internal server error"})
    }
}

export const getClassroomById = async (req,res) => {
    try {
        const classRoomId = req.params.classId;
       

        const classroom = await Classroom.findOne({_id : classRoomId});

        if(!classroom){
            return res.status(400).json({message:"Classroom does not exist"})
        }

        res.status(200).json(classroom);
    } catch (error) {
         console.log("Error in getClassroomById controller", error);
        return res.status(500).json({message:"Internal server error"})
    }
}

export const deleteClassroom = async (req,res) => {
    try {
        const classroomId = req.params.classId;

        const classroom = await Classroom.findByIdAndDelete(classroomId);

        if(!classroom){
            return res.status(400).json({message:"Classroom does not exist"})
        }

        res.status(200).json({message: "Classroom Deleted Successfully"});
        
    } catch (error) {
        return console.log("Error in deleteClassroom controller", error);
        res.status(500).json({message:"Internal server error"})
    }
}

export const joinClassroom = async (req,res) => {

    try {
        const classId = req.params.classId;
        const { code } = req.body;


        const classroom = await Classroom.findOne({_id : classId});
        if(!classroom)(
             res.status(400).json({message:"Classroom does not exist"})
        );

        if(classroom.code !== code){
                return res.status(400).json({message:"Invalid Classroom Code"})
            }
        
        if(classroom.members.includes(req.user._id)){
            return res.status(400).json({message:"User already a member of the classroom"})
        }

        classroom.members.push(req.user._id);
        await classroom.save();

        res.status(200).json({message:`User joined the ${classroom.name} successfully`, members:classroom.members});
    } catch (error) {
        console.log("Error in joinClassroom controller", error);
        return res.status(500).json({message:"Internal server error"})
    }
}

