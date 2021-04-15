import {Dispatch} from "redux"
import {packsAPI} from "../API/packsAPI";
import {GetPackType} from "../API/packsAPI"

type stateTypeTable = Array<GetPackType>
type actionGetTableType = {
    type:"GET-TABLE",
    tableData:Array<GetPackType>
}
type actionType = actionGetTableType

const initialState:Array<GetPackType> = []

export const tableReducer = (state:stateTypeTable = initialState,action:actionType) => {
    switch (action.type){
        case "GET-TABLE":
            debugger
            return action.tableData
        default:
            return [...state]
    }
}

export const getTableAC = (tableData:Array<GetPackType>) => {
    return {
        type:"GET-TABLE",
        tableData
    }
}

export const gettableDataThunk = () => {
    return(dispatch:Dispatch) => {
        debugger
        packsAPI.getPacks({})
            .then((res) => {
                debugger
                console.log(res.data)
                dispatch(getTableAC(res.data.cardPacks))
            })
    }
}