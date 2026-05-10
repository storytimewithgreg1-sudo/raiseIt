import { X } from "lucide-react";
import {  useState } from "react";
import toast from "react-hot-toast";
import classroomAuthStore from "../store/classroom.store.js";
import { useNavigate } from "react-router";

const JoinModal = ({classId, setToggleModal}) => {
    const [code, setCode] = useState("");
    const { joinClassroom } = classroomAuthStore();
    const navigate = useNavigate();

    const handleJoinClassroom = async () => {
        
        if(!code.trim()){
            toast.error("Please enter a code");
            return;
        }
        const success = await joinClassroom(classId, code);

        
        if (success){
            setToggleModal(false);
            navigate(`/${classId}`);
        }
    }
  
    return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-between z-50">
        <div className="card z-100 bg-white w-80 md:w-130 h-50  mx-auto">
            <div className="card-body">
                <div className="card-actions  justify-end ">
                <X className="cursor-pointer text-purple-950 " onClick={() => setToggleModal(false)}/>
                </div>
                <h5 className="card-title text-purple-950">Join Classroom</h5>
                <p className="card-text text-purple-950/80">Enter the classroom code to join.</p>
                <div className="form-control flex gap-2 items-center justify-center">
                    <label >Code</label>

                    <input type="text"
                     placeholder="Enter the room code"
                     className="input input-bodered "
                     value={code}
                     onChange={(e) => setCode(e.target.value)}
 />
                     
                     
                    <button onClick={handleJoinClassroom} className="btn bg-purple-600 text-white">Enter</button>
                     
                </div>
            </div>
        </div>


    </div>
  )
}

export default JoinModal