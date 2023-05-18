import React, { useState } from 'react'
import { AuthContext, useAuth } from './auth/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const [userName, setUserName] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.redirectUri || "/"

    const loginUser = () => {
        auth.login(userName);
        navigate(redirectPath, { replace: true });
    }

    return (
        <div className='container mt-5 w-50'>
            <h1>Login Here !!</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">UserName</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={e => {
                    setUserName(e.target.value)
                }} />
                <button className='btn btn-primary mt-2' onClick={loginUser}>Login</button>
            </div>
        </div>
    )
}

export default LoginScreen