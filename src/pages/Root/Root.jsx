import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Header/Navbar';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;
