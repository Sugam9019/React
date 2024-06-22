import React from 'react'

function Student_marks({marks}) {
    console.log("inside comp2");
  return (
    
    <h2>{marks}</h2>

  )
}

export default React.memo(Student_marks);