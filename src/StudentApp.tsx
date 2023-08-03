import React from 'react'
import { student } from './StudentDB'
import StudentCard from './components/StudentCard'
import AlertComponent from './components/alertComponent'
import './index.css'



function StudentApp() {
    const[length, setLength] = React.useState(() => {
        return 0
    });
    const handleIncrement = () => {
        setLength(length+1)
    }
  return (
    <div className='container'>
    {student.map((i) => <StudentCard handleIncrement={handleIncrement} name={i.name} regno={i.regno} designation={i.designation} />)}
    <button onClick={handleIncrement} className='btn btn-primary'>Click</button>
    <p className='h3 text-white mx-5 my-1 bg-danger p-1 rounded'>{length}</p>
    </div>
  )
}

export default StudentApp