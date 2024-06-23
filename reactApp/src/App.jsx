import { useState } from "react";

function App() {

  const [obj,setObj]=useState({
                                  Name:"Sugam",
                                  USN:"A123",
                                  Marks:68,
                                  Number:123012151
                              });
                              

  const changeName=(e)=>{
    setObj({...obj,Name:e.target.value});
  }

  const changeMarks=(e)=>{
    setObj({...obj,Marks:e.target.value});
  }

  const changeUSN=(e)=>{
    setObj({...obj,USN:e.target.value});
  }

  return(
    <>
     
    <p>Name : {obj.Name}</p>
    <p>USN : {obj.USN}</p>
    <p>Marks : {obj.Marks}</p>
    <p>Number : {obj.Number}</p>

    <p>-------------------</p>

    <input type="text" value={obj.Name} placeholder="Name" onChange={changeName}/>
    <br />
    <input type="number" value={obj.Marks} placeholder="Marks" onChange={changeMarks} />
    <br />
    <input type="text" value={obj.USN} placeholder="USN" onChange={changeUSN}/>
    </>
    
  );
}

export default App
