import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
// import router from './routes/Routes';
import Main from './Main/Main';
import Home from './pages/home/Home';
import Postview from './pages/Postview/Postview';
import About from './pages/About/About';
import Hotels from './pages/Hotels/Hotels';
import AuthProvider from './provider/AuthProvider';
import LoginLayout from './layout/LoginLayout';
import Login from './pages/Login/Login';
import RegistrationForm from './pages/RegistrationForm/RegistrationForm';

const router = createBrowserRouter([
{
  path:'/',
  element: <LoginLayout></LoginLayout>,
  children:[
    {
    path: '/login',
    element: <Login></Login>
  },{
    path: '/register',
    element: <RegistrationForm></RegistrationForm>
  }
]
},
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/home',
        element: <Home></Home>
      },
      {
        path: '/post/:id',
        element: <Postview></Postview>,
        loader: (({ params }) => fetch('/place.json'))
      },{
        path:'/about',
        element: <About></About>,
        loader: (() => fetch('/culter.json'))
      },{
        path: '/hotels',
        element: <Hotels></Hotels>,
        loader: (() => fetch('/hotels.json'))
      }
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<AuthProvider>
    <RouterProvider router={router} />
</AuthProvider>

  </React.StrictMode>
);

