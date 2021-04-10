import {Dispatch} from 'redux'
import {Api} from "../API/API";



type actionLogINType = {
    type:"LOGIN"
    email:string
    password:string
    verified:boolean
}

export type stateType = {
    email:string,
    password:string,
    verified:boolean
}


let initialState = {email:"",password:"",verified:true}

export const logInReducer = (state:stateType,action:actionLogINType) => {
    switch (action.type){
        case "LOGIN":
            return {email:action.email,password:action.password,verified:action.verified}
        default:
            return state
    }
}

export const LogInAC = (email:string,password:string,verified:boolean) => {
    return {
        type:"LOGIN",
        email,
        password,
        verified
    }
}


export const LogInThunk = (email:string,password:string) => {
    return (dispatch:Dispatch) => {
        Api.logIn(email,password)
            .then((res) => {
                debugger
                console.log(res.data)
                dispatch(LogInAC(email,password,res.data.verified))
            })
    }

}