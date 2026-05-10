import {LogIn, Trash} from "lucide-react"

const Classroom = ({classroom}) => {
  return (
    <div className="card  shadow-lg w-96 md:w-80 bg-linear-to-r from-cyan-300 to-blue-200">
      <div className="card-body">
        
        <h5 className="card-title text-blue-800">{classroom.name}</h5>
        <p className="card-text text-blue-800/80 mb-6">{classroom.description}</p>

        <div className="card-actions flex justify-between items-center">
          <LogIn className="text-purple-900"/>
          <button className="btn bg-purple-500 text-white hover:bg-purple-600 hover:text-white hover:border-none">Join Classroom</button>
          <Trash className="text-red-500"/>
        </div>
      </div>
    </div>





  )
}

export default Classroom
