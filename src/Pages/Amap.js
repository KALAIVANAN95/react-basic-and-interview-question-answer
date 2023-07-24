import axios from "axios";
import React, { useEffect, useState } from "react";

const API_JSON = `https://jsonplaceholder.typicode.com/users`;

const Amap = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const result = await axios.get(API_JSON);
    setUser(result.data);
  };
  
  return (
    <>
      <div className="row">
   
          {user !== undefined &&
            user?.length > 0 &&
            user.map((values,id) => {
                let {name,username}=values;
              return (
                <div className="column" key={id}>
                <div className="card" >
                  <h3>{name}</h3>
                  <p>{username}</p>
                </div>
                </div>
              );
            })}
       

       
      </div>
      <hr/>
    </>
  );
};

export default Amap;
