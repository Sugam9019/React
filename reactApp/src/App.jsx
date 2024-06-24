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

  const deleteTask=(e)=>{
  
    let updated_task=taskArr.filter((_,index)=>{
      return index != e.target.id;
    });

    setTaskArr(updated_task);
  }

  console.log(taskArr)

  return(
    <>

    <h1>To - Do - List</h1>

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
                <li key={index}>{tasks} <button id={index} onClick={deleteTask} >completed</button> </li>
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
