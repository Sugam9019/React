import React from 'react'
import "./API.css"

import { useEffect,useState } from 'react'



function API() {

    const [apiData,setApiData]=useState([]);
    const [loadind,setLoading]=useState(true);
    const [text,setText]=useState([]);



    useEffect(()=>{

       (async ()=>{
            
            const request=await fetch("https://hn.algolia.com/api/v1/search?query="+text)
            const response= await request.json()
            if(Object.keys(response).length>0){
                setApiData(response.hits)
                // console.log(response.hits);
                setLoading(false)
            }

       })()


    },[text])

    let tmp_arr=[]
    apiData.map((objs)=>{
        let tmp_obj={
        author : objs['author'],
        URL : objs['url'],
        title : objs['title'],
        views : objs['num_comments'],
        date : objs['created_at'],
        id : objs['objectID']
        }

        tmp_arr=[...tmp_arr,tmp_obj]

    })

    const changeText=(event)=>{
        setText(event.target.value);
    }
    

  


    let count =0;

    if(loadind){
        return <h1>Loading Data, please wait ..</h1>
    }else{
    
    return (
        
            <> 

            Search : <input type="text" onChange={changeText} value={text}/>
            {/* <button onClick={search_API}>Search</button> */}

                {
        
                    tmp_arr.map((data)=>{
                        return(
                            <div id='main_card' key={count++}>

                                <div key={count++} id='f1'><b>Author</b> : {data.author}</div>
                                <div key={count++} id='f2'><b>Title</b>  : {data.title}</div>
                                <div key={count++} id='f3'><b>Date </b>  : {data.date}</div>
                                <div key={count++} id='f4'><b>Views</b>  : {data.views}</div>
                                <div key={count++} id='f5'><b>URL  </b>  : { data.URL}</div>

                            </div>
                        )
                    })
                }

            </>

        )
    }
}

export default API