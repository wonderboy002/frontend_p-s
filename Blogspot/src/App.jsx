import { useEffect, useState } from "react";
import conf from "./conf/conf";
import {useDispatch} from "react-redux";
import Auth from "./Appwrite/auth";
import {login,logout} from "./Store/authSlice";

function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();

  useEffect(()=>{
      Auth.getAccount()
      .then((userData)=>{
        if (userData){
          dispatch(login({userData}))
        }
        else {
          dispatch(logout());
        }
      })
      .finally(()=>setLoading(false))
  },[])
  
  return (
  <>
     {
      !loading?(
        <div className="">

        </div>
      ):(
        <div>Loading....</div>
      )
     }
  </>
  )
}

export default App
