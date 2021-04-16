import {Dispatch} from "redux";
import {GetPacksResponseType, packsAPI} from "../API/packsAPI";
import {getTableAC, gettableDataThunk} from "./table-reducer";

/*
let initialState: GetPacksResponseType = {
    cardPacks: [],
    maxCardsCount: 1,
    minCardsCount: 0,
    pageCount: 20,
    page: 1,
    cardPacksTotalCount: 0
}

export const packsSearchReducer = (state: SearchStateType = initialState, action: PacksActionsType) => {
    switch (action.type) {
        case "GET-PACKS":
            return {...state, ...action.data}
        default:
            return state
    }
}

// actions
export const getPacksAction = (data: GetPacksResponseType) =>
    ({type: 'GET-PACKS', data}) as const

// thunks

export const getPacks = (searchRequest?: string, minCardsCount?: number, maxCardsCount?: number) =>
    async (dispatch: Dispatch) => {
        try {
            let response = await packsAPI.getPacks({
                packName: searchRequest, min: minCardsCount, max: maxCardsCount, pageCount: 25})
            dispatch(getPacksAction(response.data))
            console.log(response.data)
        } finally {}
    }



// types
export type SearchStateType = {
    minCardsCount: number
    maxCardsCount: number
}

type PacksActionsType = ReturnType<typeof getPacksAction>


*/



let initialState: SearchStateType = {
    minCardsCount: 0,
    maxCardsCount: 1
}

export const packsSearchReducer = (state: SearchStateType = initialState, action: PacksActionsType) => {
    switch (action.type) {
        case "SET-RANGE-FOR-PACKS-COUNT":
            return {...state, minCardsCount: action.minCardsCount, maxCardsCount: action.maxCardsCount}
        default:
            return state
    }
}

// actions
export const setRangeForPacksAction = (minCardsCount: number, maxCardsCount: number) =>
    ({type: 'SET-RANGE-FOR-PACKS-COUNT', minCardsCount, maxCardsCount}) as const

// thunks
export const searchPacks = (searchRequest?: string, minCardsCount?: number, maxCardsCount?: number) =>
    async (dispatch: Dispatch) => {
        try {
            let response = await packsAPI.getPacks({
                packName: searchRequest, max: maxCardsCount, min: minCardsCount
            })
            dispatch(getTableAC(response.data.cardPacks))
            console.log(response.data)
        } finally {}
    }

// types
export type SearchStateType = {
    minCardsCount: number
    maxCardsCount: number
}

type PacksActionsType = ReturnType<typeof setRangeForPacksAction>

