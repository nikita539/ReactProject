import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {RegisterTC} from "../../store/register-reducer";
import RegisterForm from "./registerForm";

const Register = () => {
    const dispatch = useDispatch()

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')


    const signUp = () => {
        if (password === confirmPassword) {
            dispatch(RegisterTC(email, password))
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
//popii
////fjfjgjgjgkjg