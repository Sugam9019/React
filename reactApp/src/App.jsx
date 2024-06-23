import { useState } from "react";

function App() {

  let [text,setText]=useState("Empty");
  let [number,setNumber]=useState(0);
  let [select,setSelect]=useState("Empty");
  let [radio,setRadio]=useState("Offline");

  const changeText=(event)=>{
    setText(event.target.value);
  }

  const changeNumber=(event)=>{
    setNumber(event.target.value);
  }

  const changeSelect=(event)=>{
    setSelect(event.target.value);
  }

  const changeRadio=(event)=>{
    setRadio(event.target.value)
  }

  return(
    <>
      <input type="text" onChange={changeText}  placeholder="Name"/>
      <p>Name : {text}</p>
      <p>------------------------------</p>
      
      <input type="number"  value={number} onChange={changeNumber} placeholder="Number"/>
      <p>Number : {number}</p>
      <p>------------------------------</p>


      <select onChange={changeSelect}>
        <option value="Empty">Select transportation Mode</option>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
        <option value="Train">Train</option>
        <option value="Flight">Flight</option>
      </select>      
      <p>Option : {select}</p>
      <p>------------------------------</p>
      

      <label>
        <input type="radio" value="Offline" onChange={changeRadio} checked={radio==="Offline"}  id="radio"/>
        Offline
      </label>
      <br />
      <label>
        <input type="radio" value="Online" onChange={changeRadio} checked={radio==="Online"} id="radio"/>
        Online
      </label>

      <p>Radio : {radio}</p>

      

    </>
    
  );
}

export default App
