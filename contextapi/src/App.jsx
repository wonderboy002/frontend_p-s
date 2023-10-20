import { useState } from 'react'
import "./index.css"
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'


function App() {


  return (
    <UserContextProvider>
    <h1>Hello hello</h1>
    <Login></Login>
    <Profile></Profile>
    </UserContextProvider>
  )
}

export default App;
