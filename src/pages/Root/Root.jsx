import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Header/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;