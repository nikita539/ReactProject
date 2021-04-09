import {Dispatch} from 'redux'
import {Api} from "../API/API";
import {useEffect} from "react";


type actionType = ReturnType<typeof RegisterAC>
type initialStateType = typeof initialState


const initialState = {}


export const registerReducer = (state: initialStateType = initialState,action:actionType) => {
    switch (action.type){
        case "REGISTER":
            return   {
                email:action.email,
                password:action.password
            }
        default:
            return state
    }
}
export const RegisterAC = (email:string,password:string) => ({
        type:"REGISTER",
        email,
        password
} as const)


export const RegisterTC = (email:string,password:string) => (dispatch:Dispatch) => {
    Api.register(email,password)
        .then((res) => {
            dispatch(RegisterAC(email,password))
        })
}