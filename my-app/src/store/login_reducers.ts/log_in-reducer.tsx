import {Dispatch} from 'redux'
import {Api} from "../../API/API";

type verifiedType = "true" | "false" | "none"

type actionLogINType = {
    type:"LOGIN"
    email:string
    password:string
    verified:verifiedType
}
type resetVerifiedType = {
    type:"RESET"
}
export type stateType = {
    email:string,
    password:string,
    verified:verifiedType
}

type actionLoginType = actionLogINType | resetVerifiedType

export const logInReducer = (state:stateType = {email:"",password:"",verified:"none"},action:actionLoginType) => {
    switch (action.type){
        case "LOGIN":
            return {email:action.email,password:action.password,verified:action.verified}
        case "RESET":
            return {...state,verified:"none"}
        default:
            return state
    }
}

export const LogInAC = (email:string,password:string,verified:verifiedType) => {
    return {
        type:"LOGIN",
        email,
        password,
        verified
    }
}
export const ResetAC = () => {
    return {
        type:"RESET"
    }
}


export const LogInThunk = (email:string,password:string) => {
    return (dispatch:Dispatch) => {
        Api.logIn(email,password)
            .then((res) => {
                debugger
                console.log(res.data)
                dispatch(LogInAC(email,password,"true"))
            }).catch((error) => {
                dispatch(LogInAC(email,password,"false"))
        })
    }

}