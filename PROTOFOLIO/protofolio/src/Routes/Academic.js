import React from 'react'
import './Academic.css';

const Academic = () => {
  return (
    <div className='academy'>
    < div className='box' id='box1'>
      <h1>Academic Qualification</h1>
      <div className='higher'>
        <h1> B.tech</h1>
        <h3>college:JNTUH</h3>
        <h4>CGPA:6.8</h4>
        </div>
        <div className='secondary'>
        <h1> +2 science</h1>
        <h3>college:HSEB</h3>
        <h4>percentage:68.33%</h4>
        </div>
        <div className='school'>
        <h1> Schooling</h1>
        <h3>Board:S.L.C</h3>
        <h4>percentage:75.12%</h4>
        </div>
<div className='box' id="box2">
  <h1>college projects</h1>
  <h3>mini projects:<p> BLIND COMMUNICATOR</p></h3><br/> 
  <h3>Major Project:<p> SMART CAR PARKING USING IMAGE PROCESSING</p></h3>

</div>


    </div>
  </div>
  )
}




export default Academic
