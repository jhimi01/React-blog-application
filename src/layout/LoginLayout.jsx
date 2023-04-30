import React from 'react';
import TopBar from '../topbar/TopBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;