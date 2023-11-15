import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import {NavBar,Layout,HomePage,ExchangePage,News,CryptoCurrencies} from "./Components"
const router=createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [{
      path : "CryptoCurrencies",
      element : <CryptoCurrencies/>
    },
    {
      path : "/Home",
      element : <HomePage/>
    },
    {
      path : "/Exchanges",
      element : <ExchangePage/>
    },
    {
      path : "/News",
      element : <News/>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
