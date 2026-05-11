

const SkeletonCard = () => {
  return (
    <div className="card w-60 md:w-70 shadow-lg  h-40 md:h-45 bg-blue-950/70 flex flex-col items-center justify-center animate-pulse">
      <div className="bg-blue-950/70 w-50 md:w-60 h-20 rounded-xl"> </div>
      
      <div className="flex items-center justify-center w-70 space-x-3">
        <div className="w-10 h-5 bg-blue-950/50 rounded-full mt-5"></div>
        <div className="w-25 h-5 bg-blue-950/50 rounded-full mt-5 "></div>
         <div className="w-10 h-5 bg-blue-950/50 rounded-full mt-5"></div>

      </div>

     
    </div>
  )
}

export default SkeletonCard