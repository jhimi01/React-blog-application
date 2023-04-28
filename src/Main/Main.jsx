import React from 'react';
import TopBar from '../topbar/TopBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
         <TopBar></TopBar>
        <Outlet></Outlet>
        </>
    );
};

export default Main;