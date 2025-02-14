import React from 'react';

import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';

const Mainlayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mainlayout;