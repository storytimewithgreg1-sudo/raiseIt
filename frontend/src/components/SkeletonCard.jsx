

const SkeletonCard = () => {
  return (
    <div className="card w-96 shadow-lg md:w-80 h-60 bg-blue-950/70 flex flex-col items-center justify-center animate-pulse">
      <div className="bg-blue-950/70 w-70 md:w-60 h-35 rounded-xl"> </div>
      
      <div className="flex items-center justify-center w-70 space-x-3">
        <div className="w-15 h-10 bg-blue-950/50 rounded-full mt-5"></div>
        <div className="w-30 h-10 bg-blue-950/50 rounded-full mt-5 "></div>
         <div className="w-15 h-10 bg-blue-950/50 rounded-full mt-5"></div>

      </div>

     
    </div>
  )
}

export default SkeletonCard