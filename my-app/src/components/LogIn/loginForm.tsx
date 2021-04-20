import React, {ChangeEvent} from "react";
import {NavLink} from "react-router-dom";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {stateTypeForError} from '../../store/loginError-reducer'

type propsType = {
    password:string;
    email:string;
    emailChange:(event:ChangeEvent<HTMLInputElement>) => void;
    passwordChange:(event:ChangeEvent<HTMLInputElement>) => void;
    logIn:() => void;
}


const LogInFrom = (props:propsType) => {

    const error = useSelector<AppRootStateType,stateTypeForError>(state => state.error)




    return (
            <div style={{width:"100%",height:'200px'}}>
                <div className="mb-3">
                    <input
                        type="email"
                        className={error.emailError ? "form-control is-invalid" : "form-control"}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder={"Email"}
                        value={props.email}
                        onChange={props.emailChange}
                    />
                    {error.emailError && <div style={{color:"red"}}>{error.emailError}</div>}
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className={error.passwordError ? "form-control is-invalid" : "form-control"}
                        id="exampleInputPassword1"
                        placeholder={"Password"}
                        value={props.password}
                        onChange={props.passwordChange}
                    />
                    {error.passwordError && <div style={{color:"red"}}>{error.passwordError}</div>}
                </div>
                <div className="mb-3 form-check">
                    <NavLink to={"/PasswordRecovery"} style={{textDecoration:'none'}}>forgot password</NavLink>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => {props.logIn()}}
                >Submit</button>
            </div>
    )
}

export default LogInFrom;