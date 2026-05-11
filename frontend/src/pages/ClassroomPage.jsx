import { useParams } from "react-router"
import useClassroomStore from "../store/classroom.store";
import SuggestionCard from "../components/SuggestionCard";
import { Plus, ArrowLeft } from "lucide-react"
import { useNavigate } from 'react-router'

const ClassroomPage = () => {
  const { classId } = useParams();
  const { classrooms } = useClassroomStore()

  const navigate = useNavigate();

  const classroom = classrooms.find((c) => c._id === classId);

  if(!classroom) return <div className="min-h-screen bg-linear-to-br from-slate-950 to-blue-950 p-1">

    <span className="text-white">Loading..</span>
  </div>

  return (

    <div className="min-h-screen bg-linear-to-br from-slate-950 to-blue-950 p-1">
      <div className=" max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">


        <div className="flex flex-col items-center justify-center mt-20 ">
          <div className="w-full border border-white/40 mb-5 p-4 rounded-xl shadow-2xl flex justify-between items-center">
            <button onClick={ () => navigate('/')} className="btn btn-xs md:btn-md border-none bg-linear-to-r from-purple-400 to-blue-400 ">
              <ArrowLeft />
            </button>
            <span className="text-md  lg:text-xl font:md md:font-bold text-white/80">{classroom.name}</span>
            <button onClick={() => navigate(`/${classId}/suggestion`)} className="btn btn-xs md:btn-md  border-none bg-linear-to-r from-purple-400 to-blue-400">
              <Plus />
            </button>


          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">

            {classroom.suggestions.map((suggestion) => (

              <SuggestionCard key={suggestion._id} suggestion={suggestion} />


            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default ClassroomPage