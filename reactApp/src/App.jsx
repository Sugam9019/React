import { useState } from "react";
import Student_name from "./Components/Student_name";
import Student_marks from "./Components/Student_marks";

function App() {


  return (
    <>
    <Student_name name={"sugam"}/>
    <Student_marks marks={"20"}/>
    </>
  )
}

export default App
