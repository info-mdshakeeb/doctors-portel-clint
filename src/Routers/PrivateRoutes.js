import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthUser } from '../Context/UserContext';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthUser);
    const location = useLocation();
    if (loading) {
        return <div className=" w-48 mx-auto flex h-screen items-center">loadinng</div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children

};

export default PrivateRoutes;