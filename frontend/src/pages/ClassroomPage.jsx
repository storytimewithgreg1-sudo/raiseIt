import { useParams } from "react-router"
import useClassroomStore from "../store/classroom.store";
import SuggestionCard from "../components/SuggestionCard";

const ClassroomPage = () => {
 const {classId} = useParams();
 const {classrooms} = useClassroomStore()


  
 const classroom = classrooms.find((c) => c._id === classId);
 console.log( "Getting classroom :",classroom)

 
  return (

    <div className="min-h-screen bg-linear-to-br from-slate-950 to-blue-950 p-1">
      <div className=" max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">


        <div className="flex flex-col items-center justify-center mt-20 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">

            {classroom.suggestions.map((suggestion)=>(
             
              <SuggestionCard key={suggestion._id} suggestion={suggestion}/>


            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default ClassroomPage