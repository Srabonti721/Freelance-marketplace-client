import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {users} = use(AuthContext);

    const location = useLocation();

    if(users && users?.email){
        return children;
    }
    return (
<Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    );
};

export default PrivateRoute;