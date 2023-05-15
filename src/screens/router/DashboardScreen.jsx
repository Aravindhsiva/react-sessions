import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const DashboardScreen = () => {
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
                        </ul>
                    </div>
                </div>
            </nav>
            <h1>In Dashboard</h1>
        </Fragment>
    )
}

export default DashboardScreen