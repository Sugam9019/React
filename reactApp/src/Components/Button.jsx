import React from 'react'

function Button({click,children}) {
    console.log(children);
  return (
    <button onClick={click}>{children}</button>
  )
}

export default React.memo(Button);