import classroomStore from "../store/classroom.store.js";
import Classroom from "../components/Classroom.jsx";
import { useEffect } from "react";
import NavBar from "../components/NavBar.jsx";


const ClassroomsPage = () => {

  const { classrooms, isFetching, fetchClassrooms } = classroomStore();
  useEffect(() => { fetchClassrooms() }, [])

  return (
    <> 
    {isFetching && <div className="">
      
      
      </div>}
    <div className=" min-h-screen w-full items-center px-5 py-3 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className=" max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        
        <NavBar/>


        <div className="flex flex-col items-center justify-center">
          {!isFetching && classrooms.length === 0 && (
            <p>No classrooms found.</p>
          )}

          { classrooms.length > 0 && (

            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
              {classrooms.map((classroom) => (

                <Classroom key={classroom._id} classroom={classroom} />


              ))}
            </div>


          )}
        </div>


      </div>
    </div>
     </>
  )
}

export default ClassroomsPage