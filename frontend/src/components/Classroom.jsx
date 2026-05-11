import {LogIn, Trash} from "lucide-react"
import classroomAuthStore from "../store/classroom.store.js";
import { useNavigate } from "react-router";
import { useState } from "react";
import JoinModal from "./JoinModal.jsx";


const Classroom = ({classroom}) => {
  const {  deleteClassroom, enterClassroom,  isDeleting, deleteId} = classroomAuthStore();
  const navigate = useNavigate();
  const classToBeDeleted = deleteId === classroom._id;
  const [toggleModal, setToggleModal] = useState(false);

 

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
  


  
  return (
    
    <> 

    {toggleModal && <JoinModal setToggleModal={setToggleModal} classId={classroom._id}/>}


    <div className="card  shadow-lg w-96 md:w-80 bg-linear-to-r from-cyan-300 to-blue-200">
      <div className="card-body">
        
        <h5 className="card-title text-blue-800">{classroom.name}</h5>
        <p className="card-text text-blue-800/80 mb-6">{classroom.description}</p>

        <div className="card-actions flex justify-between items-center">
          <LogIn onClick={() => handleEnterClassroom(classroom._id)} className="text-purple-900"/>
          <button onClick={() => { setToggleModal((prev) => !prev) }
         
        
        
        } className="btn bg-linear-to-r from-blue-400 to-blue-600 text-white hover:bg-purple-600 hover:text-white hover:border-none">Join Classroom</button>
          
          
          <Trash onClick={() => {if (!isDeleting) { handleDeleteClassroom(classroom._id)}} } 
          
                          className={classToBeDeleted ? "animate-spin text-red-500" : "text-red-500"}/>
        </div>
      </div>
    </div>
    </>





  )
}

export default Classroom
