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


type actionType = {
    type:"GET-CARD"
    newState:CardsResponseType
    redirect:boolean
}

export const cardReducer = (state:stateCardsType = initialState,action:actionType) => {
    switch (action.type){
        case "GET-CARD":
            state = action.newState
            state.redirect = action.redirect
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

export const getCardsThunk = (packsID:string) => {
    return (dispatch:Dispatch) => {
        cardsAPI.getCards({cardsPack_id:packsID})
            .then((res) => {
                dispatch(getCardsAC(res.data,true))
                console.log(res.data)
            })
    }
}