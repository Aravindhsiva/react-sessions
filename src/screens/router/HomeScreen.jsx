import React, { Fragment, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './auth/auth';

const HomeScreen = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const routeToDashboard = () => {

    }
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         navigate("dashboard");
    //     },5000);
    // },[])
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">ReactApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"dashboard"}>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/cart?active=false"}>Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-primary" to={"/profile"}>Profile</Link>
                            </li>
                            {!auth.user&&<li className="nav-item">
                                <Link className="nav-link btn btn-primary" to={"/login"}>Login</Link>
                            </li>}
                            {/* <button className='btn btn-success nav-item' onClick={e => routeToDashboard()}>
                                Dashboard Route
                            </button> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <h1>In Home</h1>
        </Fragment>
    )
}

export default HomeScreen