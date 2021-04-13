let initialState: StateType = {
    maxCardsCount: 0,
    minCardsCount: 0
}

export const searchReducer = (state: StateType = initialState, action: PacksActionsType) => {
    switch (action) {
        case "":
            return {...state}
        default:
            return state
    }
}

//actions
export const setMinCardsCount = (minCardsCount: number) => ({type: 'SET-MIN-CARDS-COUNT', minCardsCount}) as const
export const setMaxCardsCount = (maxCardsCount: number) => ({type: 'SET-MAX-CARDS-COUNT', maxCardsCount}) as const

//types
type StateType = {
    minCardsCount: number
    maxCardsCount: number
}

type TypeStateType = {

}

type PacksActionsType = {

}

