import React from 'react'
import '../index.css'


interface StudentDetailsProps {
    name : string
    regno : number
    designation : string
    handleIncrement : () => void
}

function StudentCard({name, regno, designation, handleIncrement} : StudentDetailsProps) {


  return (
<div onChange={handleIncrement} className="newCard" style={{ width: "18rem" }}>
  <div className="card-body text-white">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">
      {regno}
    </p>
    <p className="card-text">
      {designation}
    </p>
  </div>
</div>
  )
}

export default StudentCard