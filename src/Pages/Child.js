import React from 'react'

const Child = ({name,age,native,nameChange}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h2>{native}</h2>
        <button onClick={()=>nameChange("KALAIVANAN K")}>Name Change</button>
    </div>
  )
}

export default Child