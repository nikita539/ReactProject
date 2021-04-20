import {Dispatch} from 'redux'
import {Api} from "../API/API";

type verifiedType = "true" | "false" | "none"

type actionLogINType = {
    type:"LOGIN"
    email:string
    password:string
    verified:verifiedType
    _id:string
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
            return {
                email:action.email,
                password:action.password,
                verified:action.verified,
                _id:action._id
            }
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
        verified,
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
                dispatch(LogInAC(email,password,"true"))
                console.log(res.data._id)
                console.log(res.data)
            }).catch((error) => {
                dispatch(LogInAC(email,password,"false"))
        })
    }

}