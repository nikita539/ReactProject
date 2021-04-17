import {Dispatch} from "redux"
import {packsAPI} from "../API/packsAPI";
import {GetPackType} from "../API/packsAPI"
import {setRangeForPacksAction} from "./search-reducer";

const getTableType = "GET-TABLE"
const deleteTableItemType = "DELETE-TABLE-ITEM"

type stateTypeTable = Array<GetPackType>
type actionGetTableType = {
    type:"GET-TABLE",
    tableData:Array<GetPackType>
}
type actionTypeDeleteItem = {
    type:"DELETE-TABLE-TIME"
    tableDateDeleted:Array<GetPackType>
    id:string
}


type actionType = actionGetTableType | actionTypeDeleteItem

const initialState:Array<GetPackType> = []


export const tableReducer = (state:stateTypeTable = initialState,action:actionType) => {
    switch (action.type){
        case "GET-TABLE":
            debugger
            return action.tableData
        case "DELETE-TABLE-TIME":
            return action.tableDateDeleted
        default:
            return [...state]
    }
}


// action creators
export const getTableAC = (tableData:Array<GetPackType>) => {
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
                dispatch(getTableAC(res.data.cardPacks))
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