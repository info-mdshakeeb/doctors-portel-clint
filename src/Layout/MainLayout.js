import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer';
import NaveBAr from '../Pages/Share/NaveBAr';

const MainLayout = () => {
    return (
        <div>
            <NaveBAr />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;