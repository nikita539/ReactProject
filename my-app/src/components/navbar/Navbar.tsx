import React from "react";
import {NavLink,Redirect} from "react-router-dom";
import './navbar.module.css'
import classes from "./navbar.module.css"


export const routes = {
    forProfile:"/Profile",
    forLogin:"/Log_in",
    forRegister:"/Register",
    foNewPassword:"/New_Password",
    forPasswordRecovery:"/PasswordRecovery",
    forMistake:"/404",
    forTable:"/Table"
}


const Navbar = () => {
    return <div className={classes.Navbar}>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink to={routes.forProfile} className="nav-link">Profile</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={routes.forLogin} className="nav-link" >Log_in</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={routes.forRegister} className="nav-link" >Register</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={routes.foNewPassword} className="nav-link">New_Password</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={routes.forPasswordRecovery} className="nav-link">Password recovery</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={routes.forTable} className="nav-link">Table</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={routes.forMistake} className="nav-link">404</NavLink>
            </li>
        </ul>
    </div>
}

export default Navbar;