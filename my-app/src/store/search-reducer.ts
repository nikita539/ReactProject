import {Dispatch} from "redux";
import {packsAPI} from "../API/packsAPI";

let initialState: SearchStateType = {
    minCardsCount: 0,
    maxCardsCount: 1
}

export const packsSearchReducer = (state: SearchStateType = initialState, action: PacksActionsType) => {
    switch (action.type) {
        case "SET-RANGE-CARDS-COUNT":
            return {...state, minCardsCount: action.minCardsCount, maxCardsCount: action.maxCardsCount}
        default:
            return state
    }
}

// actions
export const setRangeCardsCountAction = (minCardsCount: number, maxCardsCount: number) =>
    ({type: 'SET-RANGE-CARDS-COUNT', minCardsCount, maxCardsCount}) as const

// thunks
export const setRangeForPacks = (minCardsCount: number, maxCardsCount: number) => (dispatch: Dispatch) => {
    dispatch(setRangeCardsCountAction(minCardsCount, maxCardsCount))
}

export const getUsers = (searchRequest: string, minCardsCount: number, maxCardsCount: number) =>
    async () => {
        try {
            let response = await packsAPI.getPacks({
                packName: searchRequest, max: maxCardsCount, min: minCardsCount, pageCount: 25
            })
            console.log(response.data)
        } finally {}
    }



// types
export type SearchStateType = {
    minCardsCount: number
    maxCardsCount: number
}

type PacksActionsType = ReturnType<typeof setRangeCardsCountAction>

