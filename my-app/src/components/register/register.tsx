import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {RegisterTC} from "../../store/register-reducer";
import RegisterForm from "./registerForm";
import {AppRootStateType} from "../../store/store";

const Register = () => {
    const dispatch = useDispatch()
    const isRegisteredUser = useSelector<AppRootStateType, boolean>(state => state.register.isRegistered)

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')


    const signUp = () => {

        if (password === confirmPassword) {
            dispatch(RegisterTC(email, password))
        } else {
            return
        }
        if(!isRegisteredUser) {
            return < Redirect to={"/Log_in"}/>
        }

    }

    const setEmailChange = (value: string) => {
        setEmail(value)
    }
    const setPasswordChange = (value: string) => {
        setPassword(value)
    }
    const setConfirmPasswordChange = (value: string) => {
        setConfirmPassword(value)
    }


    return <div className="Register">
        <h1>Register</h1>
        <RegisterForm
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPasswordChange}
            setEmail={setEmailChange}
            setPassword={setPasswordChange}
            signUp={signUp}
        />

    </div>


}

export default Register;
