import { useState } from "react"
import { Plus } from "lucide-react";
import useClassroomStore from "../store/classroom.store";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { ArrowLeft } from 'lucide-react'


const CreateClassroomPage = () => {
  const [roomName, setRoomName] = useState("");
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const { createClassroom } = useClassroomStore();

  const navigate = useNavigate()

  const handleRoomCreation = async (e) => {
    e.preventDefault()

    if (!roomName || !code || !description) {
      toast.error("All fields are required")
      return;
    }
    const success = await createClassroom({ name: roomName, code, description });
    if (success) {
      return navigate('/')
    }

  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 to-blue-950 p-1">

      <div className=" min-h-screen flex flex-col  max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <div className=" w-full p-4 mt-10 border-b border-white/30">
          <button onClick={() => navigate('/')} className="btn btn-sm md:btn-md border-none bg-linear-to-r from-blue-400 to-blue-600 ">
            <ArrowLeft />
          </button>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center h-full">
          <div className="card bg-linear-to-br from-indigo-500 to-blue-500 w-65 md:w-120  mx-auto">
            <div className="card-body ">
              <h3 className="text-white card-title text-sm md:text-md text-center ">Create Room</h3>
              <form onSubmit={handleRoomCreation} className="w-full flex flex-col items-center justify-center">


                <div className="form-control flex flex-col gap-2 mb-4 w-full ">
                  <label className="text-white/80 text-xs md:text-sm">Room Name</label>
                  <input className="w-full placeholder:text-xs md:placeholder:text-sm input input-bordered bg-transparent text-white/60 border-sky-300 placeholder:text-white/40 focus:outline-none focus:border-white/90"
                    type="text"
                    placeholder="Enter your preferred room name"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                  />

                </div>


                <div className="form-control flex flex-col gap-2 mb-4 w-full">
                  <label className="text-white/80 text-xs md:text-sm">Code</label>
                  <input className="w-full placeholder:text-xs md:placeholder:text-sm  input input-bordered bg-transparent text-white/60 border-sky-300 placeholder:text-white/40 focus:outline-none focus:border-white/90"
                    type="text"
                    placeholder="Create a code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />

                </div>


                <div className="form-control flex flex-col gap-2 mb-4 w-full">
                  <label className="text-white/80 text-xs md:text-sm">Description</label>
                  <textarea className="w-full placeholder:text-xs md:placeholder:text-sm  input input-bordered bg-transparent text-white/60 border-sky-300 placeholder:text-white/40 focus:outline-none focus:border-white/90"
                    type="text"
                    placeholder="What's this room about?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                </div>

                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-sm md:btn-md border-none text-blue-600 bg-white0 rounded-2xl" >
                    <span className="text-xs md:text-sm">Create</span>
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

export default CreateClassroomPage