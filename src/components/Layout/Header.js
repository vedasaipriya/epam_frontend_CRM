import React from 'react'
import {NavLink,Link} from 'react-router-dom';
import toast from 'react-hot-toast';

const Header = () => {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" >
                SIMPLECRM
            </Link>
            <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
             
            <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link">
                  DashBoard
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/customer" className="nav-link">
                  Customers
                </NavLink>
              </li>
              
            
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style={{ border: "none"}}>
                        User
                    </NavLink>
                    <ul className="dropdown-menu">
                        <li>
                        <NavLink to = "profile" className="dropdown-item" >
                            Profile
                        </NavLink></li>
                        <li>
                        <NavLink to="/login" className="dropdown-item"  >
                        Logout
                        </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <NavLink to="/register" className="nav-link" >
                    Register
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/login" className="nav-link" >
                    Login
                    </NavLink>
                </li>

              <li className="nav-item">
                <NavLink to="/faqs" className="nav-link" >
                  FAQS?
                </NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
