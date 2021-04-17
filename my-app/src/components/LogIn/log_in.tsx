import React, {ChangeEvent, useState} from "react";
import './log_in.module.css'
import classes from './log_in.module.css'
import {useDispatch, useSelector} from "react-redux";
import LogInFrom from "./loginForm";
import {Redirect} from 'react-router-dom'
import {AppRootStateType, store} from "../../store/store";
import {routes} from "../navbar/Navbar";
import {stateType} from "../../store/log_in-reducer";
import {errorLoginEmailAC,errorLoginPasswordAC} from '../../store/loginError-reducer'
import {LogInThunk} from '../../store/log_in-reducer'



const LogIn = () => {

    const dispatch = useDispatch()
    const loginDate = useSelector<AppRootStateType,stateType>(state => state.logIn)
    console.log(loginDate.email)
    console.log(loginDate.verified)

    let [email,setEmail] = useState<string>("")
    let [password,setPassword] = useState<string>("")

    // Functions
    const logIn = () => {

        if(!email && !password){
            dispatch(errorLoginEmailAC("enter email,please"))
            dispatch(errorLoginPasswordAC("enter password,please"))
        }else if (!/\S+@\S+\.\S+/.test(email)) {
            dispatch(errorLoginEmailAC("email is not valid"))
        }else if (!password){
            dispatch(errorLoginPasswordAC("enter password"))
        }else if (password.length<5){
            errorLoginPasswordAC(" ")
        }else {
            dispatch(LogInThunk(email,password))
        }

    }
    const emailChange = (event:ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }
    const passwordChange = (event:ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }


    // Redirects
    if(loginDate.verified === "true"){
        return <Redirect to={routes.forProfile}/>
    }
    if(loginDate.verified === "false"){
        return  <Redirect to={routes.forRegister}/>
    }


    return <div className={classes.Login}>
        <h1 className={classes.H1} >Login</h1>
        <LogInFrom
            password={password}
            email={email}
            emailChange={emailChange}
            passwordChange={passwordChange}
            logIn={logIn}
        />
    </div>
}

export default LogIn;