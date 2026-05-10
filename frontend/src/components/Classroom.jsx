import {LogIn, Trash} from "lucide-react"
import classroomAuthStore from "../store/classroom.store.js";
import { useNavigate } from "react-router";

const Classroom = ({classroom}) => {
  const { joinClassroom , deleteClassroom, enterClassroom, isLoading} = classroomAuthStore();
  const navigate = useNavigate();
  console.log("isLoading", isLoading)

  const handleEnterClassroom =async (classId) => {
    console.log("clicked", classId)
    const success = await enterClassroom(classId);
    if(success){
      navigate(`/${classId}`);
    }

  }
  const handleDeleteClassroom = async (classId) => {
    await deleteClassroom(classId);
  }
  
  const handleJoinClassroom = async (classId) => {
    const code = prompt("Enter the classroom code:");
    if (code) {
      await joinClassroom(classId, code);
    }
  }

  
  return (
    <div className="card  shadow-lg w-96 md:w-80 bg-linear-to-r from-cyan-300 to-blue-200">
      <div className="card-body">
        
        <h5 className="card-title text-blue-800">{classroom.name}</h5>
        <p className="card-text text-blue-800/80 mb-6">{classroom.description}</p>

        <div className="card-actions flex justify-between items-center">
          <LogIn onClick={() => handleEnterClassroom(classroom._id)} className="text-purple-900"/>
          <button onClick={() => handleJoinClassroom(classroom._id)} className="btn bg-purple-500 text-white hover:bg-purple-600 hover:text-white hover:border-none">Join Classroom</button>
          <Trash onClick={() => handleDeleteClassroom(classroom._id)} className="text-red-500"/>
        </div>
      </div>
    </div>





  )
}

export default Classroom
