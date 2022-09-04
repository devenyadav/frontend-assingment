
import './App.css';
import React,{useEffect,useState} from 'react';

function App() {
  const [count,setCount]=useState(10)
  useEffect(()=> {
    console.log(useEffect);
  })
  return (
    <div className='App'>
      <h1>The number is:{count}</h1>
      <button onClick={()=>setCount(count+5)}>Add 5</button>
    </div>
 
      
      
  );
}

export default App;
