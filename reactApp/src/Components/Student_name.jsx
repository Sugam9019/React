import React from 'react'

function Student_name({name}) {
    console.log("inside comp1");
  return (
    <h1>{name}</h1>
  )
}

export default React.memo(Student_name);