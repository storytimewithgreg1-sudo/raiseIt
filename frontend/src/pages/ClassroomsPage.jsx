import classroomStore from "../store/classroom.store.js";
import Classroom from "../components/Classroom.jsx";
import { useEffect } from "react";
import {Link} from "react-router";

const ClassroomsPage = () => {

  const { classrooms, isLoading, fetchClassrooms } = classroomStore();
  useEffect(() => { fetchClassrooms() }, [])

  return (
    <div className=" min-h-screen w-full items-center px-5 py-3 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className=" max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <div className="flex justify-between p-5 items-center mb-10">
          <span className="text-white">Raise<span className="text-purple-400">It</span></span>
          <Link to='/create'>
            <button className="btn border-purple-600/50 text-sm hover:border-none bg-linear-to-r from-blue-600 to-purple-600 text-white">Create Classroom</button>
          </Link>

        </div>



        <div className="flex flex-col items-center justify-center">
          {!isLoading && classrooms.length === 0 && (
            <p>No classrooms found.</p>
          )}

          {!isLoading && classrooms.length > 0 && (

            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
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