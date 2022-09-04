
import {NavLink} from 'react-router-dom';
function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/About"> About </NavLink>
            <NavLink to="/Contact"> Contact </NavLink> 
            <NavLink to="/Login" className='login'> login </NavLink>

    
        </div>
    )
}
export default Navbar;