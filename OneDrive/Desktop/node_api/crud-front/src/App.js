

import React, { useState, useEffect } from 'react';
import './App.css'
function App() {
  
  const [data,setData]=useState([])
 
  useEffect(() => {
    fetch("/user")
    .then(res => res.json())
    .then(res => {
     
      setData(res)
    });
  }, []);
  return (
    <>
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>email</th>
          <th>phone</th>
        </tr>
        {data.map((item) => {
          return (
            <tr >
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          )
        })}
      </table>
    </div>
    </>
  )
}

export default App
