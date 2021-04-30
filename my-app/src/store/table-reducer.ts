import {Dispatch} from "redux"
import {packsAPI} from "../API/packsAPI";
import {GetPackType} from "../API/packsAPI"
import {setRangeForPacksAction} from "./search-reducer";
const getTableType = "GET-TABLE"

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
    tableData:stateTypeTable
}


type actionType = actionGetTableType

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
            state = action.tableData
            return {...state}
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



//thunks
export const gettableDataThunk = (id:string) => {
    return(dispatch:Dispatch) => {
        packsAPI.getPacks({user_id:id})
            .then((res) => {
                console.log(res.data)
                dispatch(getTableAC(res.data))
                dispatch(setRangeForPacksAction(res.data.minCardsCount, res.data.maxCardsCount))
            })
    }
}
export const deleteTableItemsThunk = (id:string,userId:string) => {
    return(dispatch:Dispatch) => {
        packsAPI.deleteItemsTable(id)
            .then((res) => {
                console.log(res.data)
            })
        packsAPI.getPacks({user_id:userId})
            .then((res) => {
                dispatch(getTableAC(res.data))
            })
    }
}
export const changeTableItemNameThunk = (_id:string,name:string,userId:string) => {
    return(dispatch:Dispatch) => {
        debugger
        packsAPI.changeNameItem(_id,name)
            .then((res) => {
                console.log(res.data)
            })
        packsAPI.getPacks({user_id:userId})
            .then((res) => {
                dispatch(getTableAC(res.data))
            })
    }
}
export const addItemTableThunk = (name:string,id:string) => {
    return (dispatch:Dispatch) => {
        packsAPI.postPacks(name,id)
            .then((res) => {
                console.log(res.data)
            })
        packsAPI.getPacks({})
            .then((res) => {
                dispatch(getTableAC(res.data))
            })
    }
}