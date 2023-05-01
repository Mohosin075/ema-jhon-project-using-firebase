import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const location = useLocation()
    console.log(location);

    const {user, loading} = useContext(AuthContext)
    if(user){
        return children;
    }

    if(loading){
        return <div>loading...</div>
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;