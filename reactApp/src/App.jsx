import List from "./Components/List";

function App() {

  const students=[{key:1,name:"sugam",marks:90},
                  {key:2,name:"srinath",marks:89},
                  {key:3,name:"akash",marks:92},
                  {key:4,name:"kishore",marks:100},
                  {key:5,name:"varun",marks:95}];

  return (
    <>
      <List items={students}/>
    </>
  )
}

export default App
