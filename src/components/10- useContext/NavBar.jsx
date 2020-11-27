/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/prefer-default-export */
import React from 'react'

import { Link, NavLink } from 'react-router-dom'

/* Styles */
import 'bootstrap/dist/css/bootstrap.css';

export const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='/'>
          useContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact activeClassName="active" className="nav-item nav-link active" to="/">
              Home 
            </NavLink>
            <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">
              About
            </NavLink>
            <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    );
}
