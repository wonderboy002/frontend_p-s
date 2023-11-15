import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import {NavBar,Layout} from "./Components"
const router=createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [{
      path : "CryptoCurrencies",
      element : <h1>This is Crypto Page</h1>
    },
    {
      path : "Exchanges",
      element : <h1>This is Exchanges Page</h1>
    },
    {
      path : "News",
      element : <h1>This is Crypto news Page</h1>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
