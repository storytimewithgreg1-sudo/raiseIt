import { Plus, ArrowLeft} from "lucide-react";
import { useState } from "react"

import { useNavigate } from "react-router";
import useSuggestionStore from "../store/suggestions.store";
import {useParams} from 'react-router'



const CreateSuggestion = () => {
  const {classId} = useParams();
  const {createSuggestion} = useSuggestionStore();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState('');

  const navigate = useNavigate()

  const handleSuggestionCreation = async (e) => {
    e.preventDefault();
    await createSuggestion(classId, {title, content})
    navigate(`/${classId}`)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 to-blue-950 p-1">

      <div className=" min-h-screen flex flex-col  max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <div className=" w-full p-4 mt-10 border-b border-white/30">
          <button onClick={() => navigate(`/${classId}`)} className="btn border-none bg-linear-to-r from-blue-400 to-blue-600 ">
            <ArrowLeft />
          </button>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center h-full">
          <div className="card bg-linear-to-br from-indigo-500 to-blue-500 w-100 md:w-150  mx-auto">
            <div className="card-body ">
              <h3 className="text-white card-title text-center ">Create Suggestion</h3>
              <form onSubmit={handleSuggestionCreation} className="w-full flex flex-col items-center justify-center">


                <div className="form-control flex flex-col gap-2 mb-4 w-full ">
                  <label className="text-white/80"> Title</label>
                  <input className="w-full input input-bordered bg-transparent text-white/60 border-sky-300 placeholder:text-white/40 focus:outline-none focus:border-white/90"
                    type="text"
                    placeholder="Enter your preferred room name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                </div>


                <div className="form-control flex flex-col gap-2 mb-4 w-full">
                  <label className="text-white/80">Content</label>
                  <textarea className="w-full input input-bordered bg-transparent text-white/60 border-sky-300 placeholder:text-white/40 focus:outline-none focus:border-white/90"
                    type="text"
                    placeholder="Create a code"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />

                </div>


              

                <div className="card-actions justify-end">
                  <button type="submit" className="btn border-none text-blue-600 bg-white0 rounded-2xl" >
                    <span>Create</span>
                    <Plus />
                  </button>
                </div>


              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CreateSuggestion