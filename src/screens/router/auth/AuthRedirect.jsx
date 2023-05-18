import React from 'react'
import { useAuth } from './auth'
import { Navigate, useLocation } from 'react-router-dom';

const AuthRedirect = ({children}) => {
    const auth = useAuth();
    const location = useLocation();
    if(!auth.user){
        return <Navigate to={"/login"} state={{redirectUri:location.pathname}}  />
    }
  return children;
}

export default AuthRedirect