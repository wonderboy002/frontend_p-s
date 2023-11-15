import React from 'react';
import {Outlet} from "react-router-dom";
import {NavBar} from "./"
import {Footer} from "./"

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
