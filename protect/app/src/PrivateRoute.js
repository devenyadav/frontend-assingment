// import { useNavigate ,useEffect} from "react";

// function Protected(props) {
//     const {Component}=props
//     const navigate=useNavigate();

//     useEffect(()=>{
// let Login=localStorage.getItem('Login');
// if(!Login){

//     navigate('/Login');
// }
//     });


//     return(
//         <div>
            
//             <Component />
//         </div>

//     )
    
// }

import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const PrivateRoute =( )=> {

    let auth={'token':false}
    auth.token ? <Outlet /> :<Navigate to="/Login" />
}

export default PrivateRoute;