import React,{useState} from 'react';
// hooks concept

let Sample1=(p)=>{
    const [count,changeCount]=useState(0);
    let increment=()=>{
        changeCount(count+1)
    }
    // props in function component
    return (
        <div style={{border:"1px solid #ddd", padding:"1%",textAlign:"center"}}>
        <h2> {count} </h2>
        <h2>{p.name}</h2>
        <button onClick={increment}> Increment </button>
        </div>
    )
}

 export default Sample1;

