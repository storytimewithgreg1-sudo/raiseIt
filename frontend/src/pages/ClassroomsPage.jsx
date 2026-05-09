import classroomStore from "../store/classroom.store.js";
import Classroom from "../components/Classroom.jsx";

const ClassroomsPage = () => {
  
  const { classrooms, isLoading } = classroomStore();
  
  return (
    <div className="min-h-screen">
      <div className="">

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {!isLoading && classrooms.length === 0 && (
          <p>No classrooms found.</p>
        )}

        {!isLoading && classrooms.length > 0 && (
          classrooms.map((classroom) => (
            <Classroom key={classroom._id} classroom={classroom} />
          ))
        )}

      </div>
    </div>
  )
}

export default ClassroomsPage