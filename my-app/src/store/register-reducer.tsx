import {Dispatch} from 'redux'
import {Api} from "../API/API";

type actionType = ReturnType<typeof RegisterAC>
                | ReturnType<typeof ErrorAC>

type initialStateType = typeof initialState


const initialState = {
    isRegistered: false,
    setError: ''
}


export const registerReducer = (state: initialStateType = initialState,action:actionType) => {
    switch (action.type){
        case "REGISTER":
            return   {...state,
                isRegistered: action.isRegistered
            }
        case "ERROR":
            return   {...state,
                setError: action.error
            }
        default:
            return state
    }
}
export const RegisterAC = (isRegistered: boolean) => ({
    type:"REGISTER",
    isRegistered
} as const)
export const ErrorAC = (error: string) => ({
    type:"ERROR",
    error
} as const)


export const RegisterTC = (email:string,password:string) => (dispatch:Dispatch) => {
    Api.register(email,password)
        .then((res) => {
            dispatch(RegisterAC(true))
        })
        .catch((error) => {
            dispatch(ErrorAC(error.error))
        })
}