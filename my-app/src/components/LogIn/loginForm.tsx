import React, {useState} from "react";
import {NavLink} from "react-router-dom";

type propsType = {
    email:string
    password:string
    setLogin:(value:string) => void
    setPassword:(value:string) => void
    logInSet:() => void
}

const LogInFrom = (props:propsType) => {


    return (
        <div style={{width:"100%",height:'200px'}}>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder={"Email"}
                        value={props.email}
                        onChange={(value) =>
                        {props.setLogin(value.currentTarget.value)}}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder={"Password"}
                        value={props.password}
                        onChange={(value) =>
                        {props.setPassword(value.currentTarget.value)}}
                    />
                </div>
                <div className="mb-3 form-check">
                    <NavLink to={"/PasswordRecovery"} style={{textDecoration:'none'}}>forgot password</NavLink>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => {props.logInSet()}}
                >Submit</button>
        </div>
    )
}

export default LogInFrom;