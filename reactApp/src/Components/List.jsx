
import React from "react";

function List({items}){

    let list=items.map((item)=>{
        return <li key={item.key}>Name : {item.name} || marks : {item.marks}</li>
    });

    return(
        <>
            <ul>
                {list}
            </ul>
        </>
    )
}

export default List;