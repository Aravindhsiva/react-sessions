import React, { useState } from 'react'

const BodyWrapper = ({ children }) => {
    const [user, setUser] = useState({ name: "John Doe", age: 23 });

    const handleResetUser = () => {
        const newUser = { ...user };
        newUser.name = "";
        setUser(newUser);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e=>{
                                const {value} = e.target;
                                const newUser = {...user};
                                newUser.name = value;
                                setUser(newUser);
                            }} />
                            <button className="btn btn-outline-success">Search</button>
                        </div>
                    </div>
                </div>
            </nav>
            {React.Children.map(children, child => React.cloneElement(child, { user, handleResetUser }))}
        </div>
    )
}

export default BodyWrapper


/*
Screen 1
---------------------------------------------
Navbar
---------------------------------------------
*********************************************
List of items

*********************************************
*/

/*
Screen 2
---------------------------------------------
    Navbar
---------------------------------------------
*********************************************
    Another List of items

*********************************************
*/