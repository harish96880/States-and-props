import React from 'react'
import { student } from '../StudentDB';

interface Props {
    length : number
}

export default function AlertComponent({length} : Props) {
   
  return (
    <div className="alert alert-success" role="alert">
  {length}
</div>
  )
}
