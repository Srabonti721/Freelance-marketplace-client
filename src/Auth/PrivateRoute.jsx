import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {users, loading} = use(AuthContext);
    const location = useLocation();
 if(loading){
    return <Loading/>
 }

    if(users && users?.email){
        return children;
    }
    return (
<Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    );
};

export default PrivateRoute;