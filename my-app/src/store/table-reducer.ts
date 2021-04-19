import {Dispatch} from "redux"
import {packsAPI} from "../API/packsAPI";
import {GetPackType} from "../API/packsAPI"
import {setRangeForPacksAction} from "./search-reducer";

const getTableType = "GET-TABLE"
const deleteTableItemType = "DELETE-TABLE-ITEM"
const changeNameItem = "CHANGE-NAME"

export type stateTypeTable = {
    cardPacks: Array<GetPackType>
    page: number
    pageCount: number
    cardPacksTotalCount: number
    minCardsCount: number
    maxCardsCount: number
}
type actionGetTableType = {
    type:"GET-TABLE",
    tableData:Array<GetPackType>
}
type actionTypeDeleteItem = {
    type:"DELETE-TABLE-TIME"
    tableDateDeleted:Array<GetPackType>
    id:string
}
type actionTypeChangeNameItem = {
    type:"CHANGE-NAME"
}


type actionType = actionGetTableType
    | actionTypeDeleteItem
    | actionTypeChangeNameItem

const initialState:stateTypeTable = {
    cardPacks:[],
    cardPacksTotalCount:0,
    maxCardsCount:0,
    minCardsCount:0,
    page:0,
    pageCount:0
}


export const tableReducer = (state:stateTypeTable = initialState,action:actionType) => {
    switch (action.type){
        case "GET-TABLE":
            return action.tableData
        case "DELETE-TABLE-TIME":
            return action.tableDateDeleted
        default:
            return {...state}
    }
}


// action creators
export const getTableAC = (tableData:stateTypeTable) => {
    return {
        type:getTableType,
        tableData
    }
}
const deleteTableItemAC = (id:string,tableDateDeleted:Array<GetPackType>) => {
    return {
        type:deleteTableItemType,
        tableDateDeleted,
        id
    }
}


//thunks
export const gettableDataThunk = () => {
    return(dispatch:Dispatch) => {
        packsAPI.getPacks({})
            .then((res) => {
                console.log(res.data)
                dispatch(getTableAC(res.data))
                dispatch(setRangeForPacksAction(res.data.minCardsCount, res.data.maxCardsCount))
            })
    }
}
export const deleteTableItemsThunk = (id:string) => {
    return(dispatch:Dispatch) => {
        debugger
        packsAPI.deleteItemsTable(id)
            .then((res) => {
                dispatch(getTableAC(res.data.cardPacks))
            })
    }
}
export const changeTableItemNameThunk = (_id:string,name:string) => {
    return(dispatch:Dispatch) => {
        debugger
        packsAPI.changeNameItem(_id,name)
            .then((res) => {
                dispatch(getTableAC(res.data.cardPacks))
            })
    }
}