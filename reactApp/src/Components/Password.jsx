import React from 'react';
import { useState,useEffect } from 'react';


function Password() {

    let [pass,setPass]=useState("....");

    const [chars,setChars]=useState([]);

    // const chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*;:/?";
    
    useEffect(()=>{

        let tmp=[];

        for(let i=65;i<=90;i++){
            tmp=[...tmp,String.fromCharCode(i)]
        }

        for(let i=97;i<=122;i++){
            tmp=[...tmp,String.fromCharCode(i)];
        }

        for(let i=0;i<=9;i++){
            tmp=[...tmp,i];
        }

        let special_chars="@#$%^&*!+=-/:;"
        for(let i=0;i<special_chars.length;i++)
        {
            tmp=[...tmp,special_chars[i]];
        }

        setChars(tmp);
        
    },[]);

    useEffect(()=>{
        console.log(pass);
    },[pass]);
    
 


    const genPassword=()=>{

      
        let tmp="";
        const pass_length=Math.floor(Math.random() * (25-10) + 10);
        console.log(pass_length);

        for(let i=0;i<pass_length;i++){
            let index=Math.floor(Math.random() * ((chars.length)-0) + 0);
            tmp+=chars[index];

        }

        setPass(tmp);
      
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