import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Home from "./routes/Home";
import Root from "./routes/Root";
import MainPage from "./routes/MainPage"
import ErrorPage from "./routes/ErrorPage";
import AboutUs from "./routes/Aboutus"
import Contacto from "./routes/Contacto"

import './index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <MainPage />
      },
      {
        path:"/home",
        element: <Home />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/contactanos",
        element: <Contacto />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
