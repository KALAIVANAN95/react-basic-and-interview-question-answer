import React, { useState } from "react";
import Child from "./Child";

const BCounter = ()=>{

    const [count,setCount]=useState(0)

    const [isVisible,setIsVisible]=useState(false)

    const [name,setName]=useState('KALAI')

    const increment = ()=>{
        setCount(count+1)
        setIsVisible(!isVisible)
        setName('VANAN')
    }




    // props
    const nameChange = (values)=>{
        setName(values)
      
    }
    return(
        <>
        <div className="App">
         <p>{count}</p>  
            <h4>{name}</h4>
         {isVisible ? (<h1>This is visible</h1>):(<h2>This is not visible</h2>)}
         <button onClick={increment}>Increment</button> 
         <button onClick={nameChange}>Change Name</button> 
        </div>
       
        <hr/>
        <h6>This is props example</h6>

        <Child 
        name={"KALAIVANAN"}
        age="23"
        native="Chennai"
        nameChange={nameChange}
        />
        <hr/>
        </>
    )
}

export default BCounter;