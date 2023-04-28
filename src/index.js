import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/About/About';
import Main from './Main/Main';
import Hotels from './pages/Hotels/Hotels';
import Postview from './pages/Postview/Postview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/post/:id',
        element: <Postview></Postview>,
        loader: (({ params }) => fetch('/place.json'))
      },{
        path:'/about',
        element: <About></About>
      },{
        path: '/hotels',
        element: <Hotels></Hotels>
      }
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

