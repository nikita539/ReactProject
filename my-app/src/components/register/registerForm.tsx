import React, {ChangeEvent} from "react";

type registerFormType = {
    email:string
    password:string
    confirmPassword:string
    setEmail:(value:string) => void
    setPassword:(value:string) => void
    setConfirmPassword:(value:string) => void
    signUp:() => void
}

const RegisterForm = (props:registerFormType) => {

    const onChangeLoginHandler =  (e: ChangeEvent<HTMLInputElement>) => {props.setEmail(e.currentTarget.value)}
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {props.setPassword(e.currentTarget.value)}
    const onChangeConfirmPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {props.setConfirmPassword(e.currentTarget.value)}


    return (
        <form>
            <div>
                <input
                    placeholder={"Login"}
                    value={props.email}
                    onChange={onChangeLoginHandler}
                />
            </div>
            <div>
                <input
                    placeholder={"Password"}
                    value={props.password}
                    onChange={onChangePasswordHandler}
                />
            </div>
            <div>
                <input
                    placeholder={"Confirm Password"}
                    value={props.confirmPassword}
                    onChange={onChangeConfirmPasswordHandler}
                />
            </div>
            <div>
                <button onClick={() => props.signUp()}>Sign up</button>
            </div>
        </form>
    )
}

export default RegisterForm