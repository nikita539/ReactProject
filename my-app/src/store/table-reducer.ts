
import {GetPackType} from "../API/packsAPI"

type stateTypeTable = Array<GetPackType>
type actionGetTableType = {
    type:"GET-TABLE"
}
type actionType = actionGetTableType


export const tableReducer = (state:stateTypeTable,action:actionType) => {
    switch (action.type){
        case "GET-TABLE":
            return [...state]
        default:
            return [...state]
    }
}

const getTableAC = () => {
    return {
        type:"GET-TABLE"
    }
}