import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex gap-6 justify-center items-center m-6'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default NavBar;