import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = `https://jsonplaceholder.typicode.com/users`


const Lsearch = ()=>{

    const [users,setUsers]=useState([])

    const [search,setSearch]=useState('')
    const getUsers = async()=>{
        const getResult = await axios.get(API_URL)
        setUsers(getResult.data)
    }

    useEffect(()=>{
        getUsers()
    },[])

    return(
        <>
        <h3>Live Search function</h3>
        <input type="text" name="search" value={search} onChange={(event)=>setSearch(event.target.value)} placeholder="Please enter the name" />
        {
          search.length > 0 &&  users.map((values)=>{
                return(
                    <div key={values.id}>
                        {values.name.toLowerCase().includes(search.toLowerCase()) ? values.name : "" }
                    </div>
                )
            })
        }

        </>
    )
}

export default Lsearch;