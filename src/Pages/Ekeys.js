import React from 'react'

const Ekeys = () => {
    const numbers=[1,2,3,4,5,6,7,8,9,10]

    const details=[
        {
            name:"KALAI",
            age:"23"
        },
        {
            name:"VANAN",
            age:"24"
        },
        {
            name:"CENA",
            age:"25"
        },
    ]
  return (
    <>
    <div>
        <ul className='ul-key'>
            {
                numbers.map((number,id)=>{
                    return(
                        <li key={id}>{number}</li>
                    )
                })
            }
        </ul>
    
        <ul>
            {
                details.map((detail,index)=>{
                    return(
                        <li key={index}>{detail.name}</li>
                    )
                })
            }
        </ul>

    </div>
    <hr/>
    </>
  )
}

export default Ekeys