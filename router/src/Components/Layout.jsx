import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

//Outlet uses Layout as a base and dynammically renders things within the layout

function Layout() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  );
}

export default Layout;
