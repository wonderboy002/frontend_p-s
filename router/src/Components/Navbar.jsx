import React from "react";
import { Link, NavLink } from "react-router-dom";
import Layout from "./Layout";

//rfce
function Navbar() {
  return (
    <div className="navbar shadow-sm items-center w-full flex gap-6 bg-white p-6">
      <div className="logo">
        <h1 className="ml-4 font-bold text-2xl">
         <img className='w-[90px] h-[80px] rounded-full' src="https://i.pinimg.com/474x/1d/91/05/1d910522b6046c321b096274dfe0ed0c.jpg" alt="" />
        </h1>
      </div>
      <div className="links text-xl font-semibold flex gap-7 ml-42 mx-auto">
        <NavLink className="hover:text-teal-500" to="/">Home</NavLink>
        <NavLink className="hover:text-teal-500" to="About">About</NavLink>
        <NavLink className="hover:text-teal-500" to="Contact">Contact</NavLink>
        <NavLink className="hover:text-teal-500" to="Github">Github</NavLink>
      </div>
      <div className="btns flex gap-4 mr-8">
        <button className="bg-blue-500 py-3 px-6 rounded-lg text-white ">
          Login
        </button>
        <button className="shadow-lg shadow-slate-400 py-3 px-4 rounded-lg hover:bg-blue-500 hover:text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;
