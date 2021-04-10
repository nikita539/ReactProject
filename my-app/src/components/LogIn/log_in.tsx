import React, {useEffect, useState} from "react";
import './log_in.module.css'
import classes from './log_in.module.css'
import {LogInAC, LogInThunk} from "../../store/log_in-reducer";
import {useDispatch, useSelector} from "react-redux";
import LogInFrom from "./loginForm";
import {Redirect} from 'react-router-dom'
import {AppRootStateType, store} from "../../store/store";
import {routes} from "../navbar/Navbar";
import {stateType} from "../../store/log_in-reducer";

const LogIn = () => {

    const dispatch = useDispatch()
    const loginDate = useSelector<AppRootStateType,stateType>(state => state.logIn)
    console.log(loginDate.email)
    console.log(loginDate.verified)



    let [login,setLogin] = useState('')
    let [password,setPassword] = useState('')


    const logInSet = () => {
        dispatch(LogInThunk(login,password))
        setLogin("")
        setPassword("")
    }
    const setLoginWithUseState = (value:string) => {
        setLogin(value)
    }
    const setPasswordWithUseState = (value:string) => {
        setPassword(value)
    }


    if(loginDate.verified === "true"){
        return <Redirect to={routes.forProfile}/>
    }
    if(loginDate.verified === "false"){
        return  <Redirect to={routes.forRegister}/>
    }


    return <div className={classes.Login}>
        <h1 className={classes.H1} >Login</h1>
        <LogInFrom
            email={ login }
            password={ password }
            setLogin={ setLoginWithUseState }
            setPassword={ setPasswordWithUseState }
            logInSet={ logInSet }
        />
    </div>
}

export default LogIn;