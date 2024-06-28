import React from 'react';
import { useState,useEffect } from 'react';


function Password() {

    let [pass,setPass]=useState("....");

    const [chars,setChars]=useState([]);

    const [length,setLength]=useState(10);

    const [checkbox,setCheckbox]=useState([]);

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


    
 


    const genPassword=()=>{

      
        let tmp="";
        // const pass_length=Math.floor(Math.random() * (25-10) + 10);
        // console.log(pass_length);

        for(let i=0;i<length;i++){
            let index=Math.floor(Math.random() * ((chars.length)-0) + 0);
            tmp+=chars[index];

        }
        console.log(tmp.length);

        setPass(tmp);
      
    }

    const changeLength=(event)=>{
        setLength(event.target.value);
    }
    
    const changeCheckbox=(event)=>{
        
        if(event.target.checked){
            setCheckbox([...checkbox,parseInt(event.target.value)]);
        }
        else{
            setCheckbox(
                checkbox.filter((data)=>{
                    return data!=(parseInt(event.target.value));
                })
            );
        }

    }
    
  return (
    <>
        <h1>Password Generator</h1>

        <h2>{checkbox}</h2>

        <p>{pass}</p>

        <input type="range" min='10' max='25' onChange={changeLength} /><span>Length : {length}</span>
        <br />

        <label htmlFor="c1"><input type="checkbox"  value="1" id='c1' onChange={changeCheckbox}  /> Alphabets</label><br />
        <label htmlFor="c2"><input type="checkbox"  value="2" id='c2' onChange={changeCheckbox}  /> Numbers</label><br />
        <label htmlFor="c3"><input type="checkbox"  value="3" id='c3' onChange={changeCheckbox}  /> Specila_characters</label><br />
        
        
        <br />

        <button onClick={genPassword}>generate</button>

    </>
  )
}

export default Password