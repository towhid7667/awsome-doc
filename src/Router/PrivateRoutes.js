import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../Context/AuthProvider';

const PrivateRoutes = ({children}) => {

    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex justify-center items-center h-full'>
            <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""></img>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;