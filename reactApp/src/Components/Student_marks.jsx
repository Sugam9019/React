import React from 'react'
import { useMemo } from 'react';


function Student_marks({marks}) {
    console.log("inside comp2");
    
    const percent=useMemo(()=>{
        console.log("percentage");
        return (marks/100);
    },[marks]);

  return (
    
    <>
        <h2>{marks}</h2>
    <h3>{percent}%</h3>

    </>
  )
}

export default React.memo(Student_marks);