import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if (loader) {
        <p>loading.....</p>
    }

    if (user) {
        return children;
    }

    return  <Navigate state={{ from: location }} to="/login"  replace></Navigate>
};

export default PrivateRoutes;