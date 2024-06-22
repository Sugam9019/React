import React from 'react'

function Disp({data,text}) {
    console.log(text);
  return (
    <h2>{text} - {data}</h2>
  )
}

export default React.memo(Disp);