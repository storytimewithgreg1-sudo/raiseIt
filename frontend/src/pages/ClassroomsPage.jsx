import classroomStore from "../store/classroom.store.js";
import Classroom from "../components/Classroom.jsx";
import { useEffect } from "react";

const ClassroomsPage = () => {

  const { classrooms, isLoading, fetchClassrooms } = classroomStore();
  useEffect(() => { fetchClassrooms() }, [])

  return (
    <div className="min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className=" max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto">
        <div className="">

        </div>



        <div>
          {!isLoading && classrooms.length === 0 && (
            <p>No classrooms found.</p>
          )}

          {!isLoading && classrooms.length > 0 && (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {classrooms.map((classroom) => (

                <Classroom key={classroom._id} classroom={classroom} />


              ))}
            </div>


          )}
        </div>


      </div>
    </div>
  )
}

export default ClassroomsPage