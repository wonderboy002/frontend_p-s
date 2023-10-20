import {createContext,useContext} from "react";
export const ThemeContext=createContext({
    mode : "light",
    darkTheme : ()=>{ console.log("Dark mode enabled");},
    lightTheme : ()=>{console.log("light mode enabled")},
})

export const ThemeProvider=ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}