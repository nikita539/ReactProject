import React, {ChangeEvent} from "react";
import style from './register.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";

type registerFormType = {
    email: string
    password: string
    confirmPassword: string
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    setConfirmPassword: (value: string) => void
    signUp: () => void
}


const RegisterForm = (props: registerFormType) => {

    const error = useSelector<AppRootStateType, string>(state => state.register.setError)


    const onChangeLoginHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEmail(e.currentTarget.value)
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setPassword(e.currentTarget.value)
    }
    const onChangeConfirmPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setConfirmPassword(e.currentTarget.value)
    }



    return (

        <div className={style.Register}>
            <div >
                <input type="email"
                       className={`form-control ${error && 'is-invalid'}`}
                       id="floatingInput"
                       placeholder="Login"
                       value={props.email}
                       onChange={onChangeLoginHandler}/>
            </div>

            <div className={style.Password}>
                <input type="password"
                       className={`form-control ${error && 'is-invalid'}`}
                       id="floatingPassword"
                       placeholder="Password"
                       value={props.password}
                       onChange={onChangePasswordHandler}/>
            </div>

            <div>
                <input type="password"
                       className={`form-control ${error && 'is-invalid'}`}
                       id="floatingPassword"
                       placeholder="Confirm password"
                       value={props.confirmPassword}
                       onChange={onChangeConfirmPasswordHandler}/>
            </div>
            {error && <div className={style.Error}>{error}</div>}

            <div className={style.Button}>
                <button type="button" className="btn btn-primary" onClick={() => props.signUp()}>Sign up</button>
            </div>
        </div>


    )


}

export default RegisterForm