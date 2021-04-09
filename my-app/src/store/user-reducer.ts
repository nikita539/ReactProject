type actionType = {
    type:"Add"
}


export const userReducer = (state:string = 'Nikita',action:actionType) => {
    switch (action.type){
        case "Add":
            return state
        default:
            return state
    }
}