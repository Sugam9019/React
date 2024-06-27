import React from 'react';
import { useState,useEffect } from 'react';


function Password() {

    const [pass,setPass]=useState("..");

    const [chars,setChars]=useState([]);

    // const [count,setCount]=useState(0);
    
    useEffect(()=>{
        for(let i=65;i<=90;i++){
            setChars(chars.push(String.fromCharCode(i)));
        }

        for(let i=97;i<=122;i++){
            setChars(chars.push(String.fromCharCode(i)));
        }

        for(let i=0;i<=9;i++){
            setChars(chars.push(i));
        }

        let special_chars="@#$%^&*!+=-/:;"
        for(let i=0;i<special_chars.length;i++)
        {
            setChars(chars.push(special_chars[i]));
        }

        console.log(chars);
    },[]);

    const genPassword=()=>{

      
    }

    
    
  return (
    <>
        <h1>Password Generator</h1>

        <p>{pass}</p>
        <button onClick={genPassword}>generate</button>
    </>
  )
}

export default Password