
import classroomAuthStore from "../store/classroom.store.js";
import { useNavigate } from "react-router";
import { useState } from "react";
import JoinModal from "./JoinModal.jsx";


const Classroom = ({ classroom }) => {
  const { deleteClassroom, enterClassroom, isDeleting, deleteId } = classroomAuthStore();
  const navigate = useNavigate();
  const classToBeDeleted = deleteId === classroom._id;
  const [toggleModal, setToggleModal] = useState(false);



  const handleEnterClassroom = async (classId) => {
    
    const success = await enterClassroom(classId);
    if (success) {
      navigate(`/${classId}`);
    }

  }
  const handleDeleteClassroom = async (classId) => {
    await deleteClassroom(classId);
  }




  return (

    <>

      {toggleModal && <JoinModal setToggleModal={setToggleModal} classId={classroom._id} />}


      <div className="card  shadow-lg w-65 md:w-70 bg-linear-to-r from-cyan-300 to-blue-200">
        <div className="card-body">

          <h5 className="card-title text-sm md:text-lg  text-blue-800">{classroom.name}</h5>
          <p className="card-text text-blue-800/80 mb-6 text-xs md:sm">{classroom.description}</p>

          <div className="card-actions flex justify-around items-center">
            <button onClick={() => handleEnterClassroom(classroom._id)} className="btn btn-xs bg-transparent border-2 border-blue-700 text-blue-700 " >
              
              Enter
            
            
            </button>
            <button onClick={() => { setToggleModal((prev) => !prev) }



            } className="btn btn-xs  bg-linear-to-r from-blue-400 to-blue-600 text-white hover:bg-purple-600 hover:text-white hover:border-none">Join Room

            </button>

            <button onClick={() => { if (!isDeleting) { handleDeleteClassroom(classroom._id) } }}
             className={classToBeDeleted ? "btn btn-xs animate-spin text-white  bg-red-500" : "btn btn-xs  text-white bg-red-500/80 "}

            >Delete

            </button>
          
          </div>
        </div>
      </div>
    </>





  )
}

export default Classroom
