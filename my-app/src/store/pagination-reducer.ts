import {Dispatch} from 'redux'
import {packsAPI} from "../API/packsAPI";

type actionType = ReturnType<typeof cardPacksTotalCountAC>
    | ReturnType<typeof pageCountAC>
    | ReturnType<typeof pageAC>

type initialStateType = typeof initialState

const initialState = {
    cardPacksTotalCount: 40,
    pageCount: 10,
    page: 1

}

export const paginationReducer = (state: initialStateType = initialState, action: actionType) => {
    switch (action.type) {
        case "CARDS-PACKS-TOTAL-COUNT":
            return {...state, cardPacksTotalCount: action.cardPacksTotalCount}
        case "PAGE-COUNT":
            return {...state, pageCount: action.pageCount}
        case "PAGE":
            return {...state, page: action.page}
        default:
            return state
    }
}

export const cardPacksTotalCountAC = (cardPacksTotalCount: number) => ({
    type: 'CARDS-PACKS-TOTAL-COUNT',
    cardPacksTotalCount
} as const)
export const pageCountAC = (pageCount: number) => ({type: 'PAGE-COUNT', pageCount} as const)
export const pageAC = (page: number) => ({type: 'PAGE', page} as const)


export const paginationTC = (page: number, pageCount: number) => (dispatch: Dispatch) => {
    packsAPI.pagination(page, pageCount)
        .then((res) => {
            dispatch(pageAC(page))
            dispatch(pageCountAC(pageCount))
        })
}







