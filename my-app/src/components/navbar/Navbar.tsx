import React from "react";
import {NavLink,Redirect} from "react-router-dom";
import './navbar.module.css'
import classes from "./navbar.module.css"

const Navbar = () => {
    return <div className={classes.Navbar}>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink to={'/Profile'} className="nav-link">Profile</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'/Log_in'} className="nav-link" >Log_in</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'/Register'} className="nav-link" >Register</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'/New_Password'} className="nav-link">New_Password</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'/PasswordRecovery'} className="nav-link">Password recovery</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'/404'} className="nav-link">404</NavLink>
            </li>
        </ul>
    </div>
}

export default Navbar;