import React, { useRef } from "react";

const Huseref =()=>{

    const colorparagraph=useRef(null);
    const colors=['red','green','blue','yellow','orange','pink','black']

    const changeColor = ()=>{
        const randomcolor=Math.floor(Math.random() * colors.length)
        colorparagraph.current.style.color=colors[randomcolor]
    }

    return(
        <>
        <p ref={colorparagraph}>This is UseRef example</p>
        
        <button onClick={changeColor}>Change para color</button>
        <hr/>
        </>
    )
}

export default Huseref;