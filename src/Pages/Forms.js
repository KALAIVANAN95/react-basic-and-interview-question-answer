import React, { useState } from "react";

const Forms = () => {
  // const getInputsvalues = (value,name)=>{
  //     const data = {[name]:value}
  //     setObjdata({...objdata,...data})
  // }
  const [objdata, setObjdata] = useState({});
  const [datas, setDatas] = useState([]);

  const getInputsvalues = (event) => {
    let { name, value } = event.target;
    let inputs = { [name]: value };
    setObjdata({ ...objdata, ...inputs });
  };
  const submit = (event) => {
    event.preventDefault();
    setDatas((newData) => [...newData, objdata]);
  };
  return (
    <>
      <div className="App">
        <form onSubmit={submit}>
          <input
            type="text"
            name="name"
            placeholder="Write your name"
            onChange={getInputsvalues}
          />
          <input
            type="number"
            name="age"
            placeholder="Write your age"
            onChange={getInputsvalues}
          />
          <input
            type="text"
            name="hobbies"
            placeholder="Write your hobbies"
            onChange={getInputsvalues}
          />
          <input
            type="date"
            name="date"
            placeholder="Write your date"
            onChange={getInputsvalues}
          />
          <button type="submit">submit</button>
        </form>
      </div>

      {datas.map((data, index) => {
        return (
          <ul key={index}>
            <li>{data.name}</li>
            <li>{data.age}</li>
            <li>{data.hobbies}</li>
            <li>{data.date}</li>
          </ul>
        );
      })}
      <hr />
    </>
  );
};

export default Forms;
