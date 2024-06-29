import React from 'react'

import { useEffect,useState } from 'react'



function API() {

    const [apiData,setApiData]=useState([]);

    useEffect(()=>{

       (async ()=>{

            const request=await fetch("https://hn.algolia.com/api/v1/search?query=html")
            const response= await request.json()
            // console.log(response.hits)
            setApiData(response.hits)
       })()
    
    },[])

    apiData.map((obj)=>{
        console.log(obj['_highlightResult']['author']['value'])
    })

  return (
    
    <>
        {/* {
            apiData.map((obj)=>{
                <p>{obj.author}</p>
            })
        } */}
    </>

  )
}

export default API