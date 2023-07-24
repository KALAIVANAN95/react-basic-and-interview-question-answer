import React, { useState } from 'react'

const Deventhand = () => {
    const [number,setNumber]=useState(0)
    const addNums = ()=>{
       setNumber(2+2)
    }
  return (
    <>
      <div>
        <p>{number}</p>
        <button onClick={addNums}>Add Number</button>
      </div>
      <hr/>
    </>
  
  )
}

export default Deventhand