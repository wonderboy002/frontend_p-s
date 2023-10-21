import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Switch from '@mui/material/Switch';
import ControlledSwitches from "./Components/Toggle";
import { ThemeProvider } from "./Context/Theme";
import useTheme from "./Context/Theme";

function App() {
  const [mode, setmode] = useState("light");

  const darkTheme=()=>{
    setmode("dark");
  }


  const lightTheme=()=>{
    setmode("light");
  }

  //actually change the theme
  useEffect(()=>{
       document.querySelector('html').classList.remove("dark","light");
       document.querySelector('html').classList.add(mode);
  },[mode])

  return (
    <>
    <ThemeProvider value={{mode,darkTheme,lightTheme}}>


      <div className="app  w-full text-2xl h-screen flex flex-col gap-3 items-center justify-center">
        <h1>Toggle theme here <ControlledSwitches></ControlledSwitches></h1>
         <div className="card p-5 shadow-md shadow-slate-500 overflow-hidden rounded-lg flex gap-4 flex-col w-1/4 dark:bg-black dark:text-white min-h-3/5">
               <div className="img">
                  <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHM1fGVufDB8fDB8fHww" className="w-full h-44" alt="" />
               </div>
               <h1 className="text-center text-xl font-bold mx-1">
                Sony PS5 Standalone console , Aluminium Case , Starlight Sport
               </h1>

               <div className="Pricing flex gap-3">
                    <h1 className=" dark:text-white text-2xl font-bold">$499</h1>
                    <button className="bg-blue-600 rounded-md p-2 text-white ml-auto text-xl hover:bg-teal-500">Add to Cart</button>
               </div>
         </div>
       </div>
       </ThemeProvider>
    </>
  );
}

export default App;
