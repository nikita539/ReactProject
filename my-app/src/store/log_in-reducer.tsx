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
type typeLoginForCatch = {
    type:"LOGIN-CATCH"
    email:string
    password:string
    verified:verifiedType
}
export type stateType = {
    email:string,
    password:string,
    verified:verifiedType,
    _id:string
}


type actionLoginType = actionLogINType | resetVerifiedType | typeLoginForCatch

export const logInReducer = (state:stateType = {email:"",password:"",verified:"none",_id:""},action:actionLoginType) => {
    switch (action.type){
        case "LOGIN":
            return {
                email: action.email,
                password: action.password,
                verified: action.verified,
                _id:action._id
            }
        case "LOGIN-CATCH":
            return {...state,verified: action.verified}
        case "RESET":
            return {...state,verified:"none"}
        default:
            return state
    }
}

export const LogInAC = (email:string,password:string,verified:verifiedType,_id:string) => {
    return {
        type:"LOGIN",
        email,
        password,
        verified,
        _id
    }
}
export const LoginCatchAC = (ver:verifiedType) => {
    return {
        type:"LOGIN-CATCH",
        verified:ver
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
                dispatch(LogInAC(email,password,"true",res.data._id))
            }).catch((error) => {
                dispatch(LoginCatchAC("false"))
        })
    }

}