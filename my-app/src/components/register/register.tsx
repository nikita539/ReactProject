import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {ErrorAC, RegisterTC} from "../../store/register-reducer";
import RegisterForm from "./registerForm";
import {AppRootStateType} from "../../store/store";
import {routes} from "../navbar/Navbar";



const Register = () => {
    const dispatch = useDispatch()
    const isRegisteredUser = useSelector<AppRootStateType, boolean>(state => state.register.isRegistered)
    const error = useSelector<AppRootStateType, string>(state => state.register.setError)
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')


    const signUp = () => {

        if (!email) {
            dispatch(ErrorAC('Email address is required'))
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            dispatch(ErrorAC('Please, enter correct email'))
        } else if (password != confirmPassword) {
            dispatch(ErrorAC('Password confirmation does not match'))
        } else if (password.length < 6) {
            dispatch(ErrorAC('Password must be 6 or more characters'))
            return error
        } else
            dispatch(RegisterTC(email, password))

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


    return <>
        {isRegisteredUser &&
        < Redirect to={routes.forLogin}/>}
        <div className="Register">
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

    </>

}
export default Register
