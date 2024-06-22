import { useState,useCallback } from "react";
import Button from "./Components/Button";
import Title from "./Components/Title";
import Disp from "./Components/Disp";


function App() {

  

  let [v1,setV1]=useState(0);
  let [v2,setV2]=useState(0);

  const clickx=useCallback(()=>{
    setV1(v1+1)
  },[v1]);

  const clicky=useCallback(()=>{
    setV2(v2+1)
  },[v2]);
  
  

  return (
    <>

    <Title/>
    <Button click={clickx}>Button 1</Button>
    <br />
    <Button click={clicky}>Button 2</Button>

    </>
  )
}

export default App
