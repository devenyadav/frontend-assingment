import React from 'react'
import '../Contact.css'

const Contact = () => {
  return (
    <div className='form'>
    <form>
      <label> Your name</label>
      <input type="text"></input>
      <label> Email</label>
      <input type="email"></input>
      <label> subject</label>
      <input type="text"></input>
      <label> Message</label>
      
      <textarea rows="6" placeholder='Your Message'/>
      <button className='btn'>submit</button>




    </form>

    
   </div>
  )
}

export default Contact