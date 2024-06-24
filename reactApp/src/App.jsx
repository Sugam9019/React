import { useState } from "react";

function App() {

  const [text,setText]=useState("");
  const [taskArr,setTaskArr]=useState([]);



  const changeText=(e)=>{
    setText(e.target.value);
  }

  const addTask=(e)=>{
    setTaskArr([...taskArr,text]);
    setText("");
  }

  return(
    <>

    <div is="input-field">    
      <input type="text" placeholder="Enter Task" onChange={changeText} value={text}/>
      <button onClick={addTask}>Add</button>
    </div>


    <div id="task-field">
      <ul>
      {

        taskArr.map((tasks,index)=>{

          return (
              <div id="task-c1" key={index}>
                <li key={index}>{tasks} <button>completed</button> </li>
              </div>
            )
        })
      
      }
      </ul>
    </div>

    
    </>
    
  );
}

export default App
