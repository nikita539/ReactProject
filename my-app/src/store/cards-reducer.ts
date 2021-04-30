import {Card, cardsAPI, CardsResponseType} from "../API/cardsAPI";
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

type stateCardsType = CardsResponseType & {redirect?:boolean}


type actionType = {
    type:"GET-CARD"
    newState:CardsResponseType
}

export const cardReducer = (state:stateCardsType = initialState,action:actionType) => {
    switch (action.type){
        case "GET-CARD":
            state = action.newState
            return {...state}
        default:
            return  {...state}
    }
}

const getCardsAC = (newSate:CardsResponseType) => {
    return {
        type:"GET-CARD",
        newState:newSate
    }
}

export const getCardsThunk = (packsID:string) => {
    return (dispatch:Dispatch) => {
        cardsAPI.getCards({cardsPack_id:packsID})
            .then((res) => {
                dispatch(getCardsAC(res.data))
                console.log(res.data)
            })
    }
}