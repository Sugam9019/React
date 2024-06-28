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


    
    const changeLength=(event)=>{
        setLength(event.target.value);
    }
    
    const changeCheckbox=(event)=>{
        
        if(event.target.checked){
            setCheckbox([...checkbox,event.target.value]);
        }
        else{
            setCheckbox(
                checkbox.filter((data)=>{
                    return data!=(event.target.value);
                })
            );
        }

    }

    const genPassword=()=>{

        const arr_pos={
            "alp":[0,51],
            "num":[52,61],
            "spe":[62,76]

        }

      
        let tmp="";
        if(checkbox.length==0){
            alert("select constraints in the checkbox");
        }else{

                checkbox.map((ele)=>{

                    for(let i=1;i<=(length/checkbox.length);i++){
                        let index=Math.floor(Math.random() * ((arr_pos[ele][1])-arr_pos[ele][0]) + arr_pos[ele][0]);
                        tmp+=chars[index];
            
                    }
                });
        }

        setPass(tmp);
      
    }

    
  return (
    <>
        <h1>Password Generator</h1>

        <p>{pass}</p>

        <input type="range" min='10' max='25' onChange={changeLength} /><span>Length : {length}</span>
        <br />

        <label htmlFor="c1"><input type="checkbox"  value="alp" id='c1' onChange={changeCheckbox}  /> Alphabets</label><br />
        <label htmlFor="c2"><input type="checkbox"  value="num" id='c2' onChange={changeCheckbox}  /> Numbers</label><br />
        <label htmlFor="c3"><input type="checkbox"  value="spe" id='c3' onChange={changeCheckbox}  /> Specila_characters</label><br />
        
        
        <br />

        <button onClick={genPassword}>generate</button>

    </>
  )
}

export default Password