import React from 'react';
import {useDispatch} from "react-redux";
import Auth from "../../Appwrite/auth";
import {logout} from "../../Store/authSlice";

function LogoutBtn() {
    const dispatch=useDispatch();
    const logoutHandler=()=>{
        Auth.logout().then(()=>{
            dispatch(logout());
        })
        .catch(error=>{
            console.log("Error logging out :: LogoutBtn.jsx");
        })
    }
  return (
      <button className='p-3 bg-red-500 ml-auto text-white font-bold rounded-md duration-200 hover:bg-red-400 '>Logout</button>
  
  );
}

export default LogoutBtn;
