

import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="App">
      {/* <h1>Get API Call </h1> */}
      <table border="1">
       <tbody>
       <tr>
        
          <td>Name</td>
          <td>Email</td>

        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
          
          <td>{item.name}</td>
          <td>{item.email}</td>
           
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;
