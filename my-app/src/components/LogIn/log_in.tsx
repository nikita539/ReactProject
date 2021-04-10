import React, {useEffect, useState} from "react";
import './log_in.module.css'
import classes from './log_in.module.css'
import {LogInAC, LogInThunk} from "../../store/log_in-reducer";
import {useDispatch, useSelector} from "react-redux";
import LogInFrom from "./loginForm";
import {Api} from "../../API/API";
import {Redirect} from 'react-router-dom'
import {AppRootStateType, store} from "../../store/store";

const LogIn = () => {

    const dispatch = useDispatch()

    let [login,setLogin] = useState('')
    let [password,setPassword] = useState('')



    const logInSet = () => {
        dispatch(LogInThunk(login,password))
    }

    console.log(store.getState().logIn)


    const setLoginWithUseState = (value:string) => {
        setLogin(value)
    }
    const setPasswordWithUseState = (value:string) => {
        setPassword(value)
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