import React, { useState } from 'react'

const Iusestate = () => {
    const [count,setCount]=useState(0)

  return (
    <>
    <h3>This is UseState hook example</h3>
    <p>Count the number of value {count}</p>

    <button onClick={()=>setCount(count+1)}>Count</button>
    <hr/>
    </>
  )
}

export default Iusestate