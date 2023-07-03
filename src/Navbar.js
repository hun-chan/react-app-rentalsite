import {Link} from 'react-router-dom';
import { loginUser } from "./cookie";
import { useState } from 'react';
const Navbar = () => {
    //const[userName, setName] = useState('welcome');
    let userName = loginUser();
    return (
        <nav className="navbar">
            <h1>HeadPhones rental</h1>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/RentalList">RENTALS</Link>
                <Link to="/Login">LOGIN</Link>
                <Link to="/UserPage" className='UserIcon' id="user_name">{ userName }</Link>
            </div>
        </nav>
    );
}

export default Navbar;