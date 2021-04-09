import {Dispatch} from 'redux'
import {Api} from "../API/API";



type actionLogINType = {
    type:"LOGIN"
    email:string
    password:string
}

const initialState = {}

export const logInReducer = (state:object = initialState,action:actionLogINType) => {
    switch (action.type){
        case "LOGIN":
            return   {
                email:action.email,
                password:action.password
            }
        default:
            return state
    }
}

export const LogInAC = (email:string,password:string) => {
    return {
        type:"LOGIN",
        email,
        password
    }
}


export const LogInThunk = (email:string,password:string) => {
    return (dispatch:Dispatch) => {
        Api.logIn(email,password)
            .then((res) => {
                console.log(res.data)
                dispatch(LogInAC(email,password))
            })
    }

}