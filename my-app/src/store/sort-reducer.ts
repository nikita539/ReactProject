import {Dispatch} from 'redux'
import {packsAPI} from "../API/packsAPI";
import {Api} from "../API/API";
import {ErrorAC, RegisterAC} from "./register-reducer";

type actionType = ReturnType<typeof sortPacksAC>

type initialStateType = typeof initialState

const initialState = {
    sortCards: 0
}

export const sortReducer = (state: initialStateType = initialState, action: actionType) => {
    switch (action.type) {
        case "SORT-PACKS":
            return {...state, sortCards: action.sortCards}
        default:
            return state
    }
}

export const sortPacksAC = (sortPacks: number) => ({type: 'SORT-PACKS', sortCards: sortPacks} as const)

export const sortPacksDownTC = (sortPacks: number) => (dispatch: Dispatch) => {
    packsAPI.getPacksSortUp(sortPacks)
        .then((res) => {
            console.log(res.data)
            dispatch(sortPacksAC(0))
        })
}
export const sortPacksUpTC = (sortPacks: number) => (dispatch: Dispatch) => {
    packsAPI.getPacksSortDown(sortPacks)
        .then((res) => {
            console.log(res.data)
            dispatch(sortPacksAC(1))
        })
}



/*export const RegisterTC = (email:string,password:string) => (dispatch:Dispatch) => {
    Api.register(email,password)
        .then((res) => {
            dispatch(RegisterAC(true))
        })
        .catch((error) => {
            dispatch(ErrorAC(error.error))
        })
}*/


