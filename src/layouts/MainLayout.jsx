import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header';

const MainLayout = () => {
    return (
        <div >
           <Header></Header>
           <div className='w-full'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;