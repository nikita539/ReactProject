import {Dispatch} from 'redux'
import {Api} from "../API/API";

type actionType = ReturnType<typeof RegisterAC>
type initialStateType = typeof initialState

const initialState = {
    isRegistered: false
}


export const registerReducer = (state: initialStateType = initialState,action:actionType) => {
    switch (action.type){
        case "REGISTER":
            return   {...state,
                isRegistered: action.isRegistered
            }
        default:
            return state
    }
}
export const RegisterAC = (isRegistered: boolean) => ({
    type:"REGISTER",
    isRegistered
} as const)


export const RegisterTC = (email:string,password:string) => (dispatch:Dispatch) => {
    Api.register(email,password)
        .then((res) => {
            dispatch(RegisterAC(true))
        })
        .catch((error) => {
            alert(error)
        })
}