type actionType = {
    type:"SET-ID"
    Id:string
}

export const packIDReducer = (state:string = "",action:actionType) => {
    switch (action.type){
        case "SET-ID":
           return  state = action.Id
        default:
            return state
    }
}

export const packIDAC = (Id:string) => {
    return{
        type:"SET-ID",
        Id
    }
}