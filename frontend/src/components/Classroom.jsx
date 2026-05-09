

const Classroom = (classroom) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{classroom.name}</h5>
        <p className="card-text">{classroom.description}</p>

        <div className="card-actions">
          <button className="btn btn-primary">Join Classroom</button>
        </div>
      </div>
    </div>





  )
}

export default Classroom
