import {cardsAPI, CardsResponseType} from "../API/cardsAPI";
import {Dispatch} from "redux";

const initialState = {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: '',
    redirect:false
}

export type stateCardsType = CardsResponseType & {redirect?:boolean}


type actionTypeGetCards = {
    type:"GET-CARD"
    newState:CardsResponseType
    redirect:boolean
}
type actionTypeAddCards = {
    type:"ADD-CARDS"
    newState:CardsResponseType
}
type actionType = actionTypeAddCards | actionTypeGetCards


export const cardReducer = (state:stateCardsType = initialState,action:actionType) => {
    switch (action.type){
        case "GET-CARD":
            state = action.newState
            state.redirect = action.redirect
            return {...state}
        case "ADD-CARDS":
            state = action.newState
            return {...state}
        default:
            return  {...state}
    }
}

const getCardsAC = (newSate:CardsResponseType,redirect:boolean) => {
    return {
        type:"GET-CARD",
        newState:newSate,
        redirect
    }
}
const addCardAC = (newState:CardsResponseType) => {
    return {
        type:"GET-CARD",
        newState
    }
}

export const getCardsThunk = (packsID:string) => {
    return (dispatch:Dispatch) => {
        cardsAPI.getCards({cardsPack_id:packsID})
            .then((res) => {
                dispatch(getCardsAC(res.data,true))
                console.log(res.data)
            })
    }
}
export const addCardsThunk = (packsID:string) => {
    return (dispatch:Dispatch) => {
        cardsAPI.addCards(packsID)
            .then((res) => {
                dispatch(addCardAC(res.data))
            })
    }
}