import React,{useState} from 'react';
import Home from './Routes/Home';
import Academic from './Routes/Academic';
import Contact from './Routes/Contact';
import {Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const[click,setClick]=useState(false);
  
  return (
    <div className='header'>
  
    <ul  className={click? "navmenu-active":"navmenu"}
    onClick={()=>setClick(false)}>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/Academic'>Academic</Link> </li>
        <li><Link to='/Contact'>Contact</Link> </li>
    </ul>
    <div className='button1' onClick={()=>setClick(!click)}>
      {click?(<FaBars size={30} style={{color:"red"}}/>) :
(<FaTimes size={30} style={{color:"red"}}/>)}
    </div>
    </div>

  )
}

export default Navbar;