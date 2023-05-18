import React, { Fragment } from 'react'
import { useAuth } from './auth/auth'
import { Link, useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const logoutUser = () =>{
        auth.logout();
        navigate("/");
    }
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
                      </ul>
                  </div>
              </div>
          </nav>
          {auth && auth.user &&<h1>Hello {auth.user}</h1>}
          <button className='btn btn-danger mt-2' onClick={logoutUser}>Logout</button>

      </Fragment>
  )
}

export default ProfileScreen