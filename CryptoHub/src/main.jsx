import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./App/store.js";
import { Provider } from "react-redux";
import {
  NavBar,
  Layout,
  HomePage,
  ExchangePage,
  News,
  CryptoCurrencies,
} from "./Components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "CryptoCurrencies",
        element: <CryptoCurrencies />,
      },
      {
        path: "/Home",
        element: <HomePage />,
      },
      {
        path: "/Exchanges",
        element: <ExchangePage />,
      },
      {
        path: "/News",
        element: <News />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
