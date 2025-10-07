import React from 'react';
import { createBrowserRouter } from "react-router";
import PageNotFound from '../pages/ErrorPage/PageNotFound';
import Home from '../pages/Home/Home';
import Root from '../pages/Root/Root';
export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<PageNotFound></PageNotFound>,
      children:[
        {
            index:true,
            path:'/',
            Component:Home
        }
      ]

    },
]);
  