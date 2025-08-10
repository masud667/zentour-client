import React from 'react';
import Navbar from './Navber/Navber';

const Header = () => {
    return (
        <div className='bg-base-100 shadow-md py-2 sticky top-0 z-50'>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;