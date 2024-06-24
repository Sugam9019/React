import React from 'react'
import { useState} from 'react';
import "./TODO.css";


function TODO() {

  
const [text,setText]=useState("");
const [taskArr,setTaskArr]=useState([]);
const [message,setMessage]=useState("No Tasks Yet ...");



const changeText=(e)=>{
  setText(e.target.value);
}

const addTask=(e)=>{
  setTaskArr([...taskArr,text]);
  setText("");
  setMessage("");
}

const deleteTask=(e)=>{

  let updated_task=taskArr.filter((_,index)=>{
    return index != e.target.id;
  });

  setTaskArr(updated_task);
}

const reset=()=>{
  setTaskArr([]);
  setMessage("No Tasks Yet ...");
}




  return (
    <>

    <h1>To_Do_List</h1>

    <div id="input-field">    

      <input type="text" placeholder="Enter Task" onChange={changeText} value={text}/>
      <button onClick={addTask}>Add</button>

    </div>


    <div id="task-field">
      <p id="message">{message}</p>
      <table>
        <tbody>
                {

                  taskArr.map((tasks,index)=>{

                    return (
                        <tr id="task-c1" key={index}>
                          <td id="td" key={index}>{tasks} </td>
                          <td id="td" key={index + 1}><button id={index} onClick={deleteTask} >Done</button> </td>
                        </tr>
                      )
                  })
                
                }
        </tbody>
      </table>
    </div>

    <div id="reset">
      <button onClick={reset}>Reset</button>
    </div>

    
    </>
  )
}

export default TODO