import React, { useState } from 'react'

const styles={
    internal:{
        color:"blue",
        fontWeight:"900"
    },
    light:{
        backgroundColor:"white",
        color:"black"
    },
    dark:{
        backgroundColor:"black",
        color:"white"
    }
}

const Gstyle = () => {

    const [theme,setTheme]=useState(false)
    const toggletheme = ()=>{
        setTheme(!theme)
    }
  return (
    <>
    <div className="App">
        <h2 className='external'>External Style</h2>
        <h2 style={theme ? styles.light:styles.dark}>Internal Style</h2>
        <h2 style={{color:"green",backgroundColor:"yellow"}}>Inline Style</h2>

        <button onClick={toggletheme}>Toggle Theme</button>
    </div>
    <hr/>
    </>
  )
}

export default Gstyle