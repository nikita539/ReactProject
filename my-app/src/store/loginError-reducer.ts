export type stateTypeForError = {
    emailError:string,
    passwordError:string
}

type actionTypeForErrorEmail = {
    type:"ERROR-EMAIL"
    errorMessage:string
}
type actionTypeForErrorPassword = {
    type:"ERROR-PASSWORD"
    errorMessagePassword:string
}
type actionTypeForError = actionTypeForErrorEmail | actionTypeForErrorPassword

const initialState:stateTypeForError = {
    emailError:"",
    passwordError:""
}

export const loginErrorReducer = (state:stateTypeForError = initialState,action:actionTypeForError) => {
    switch (action.type){
        case "ERROR-EMAIL":
            return {...state,emailError: action.errorMessage}
        case "ERROR-PASSWORD":
            return {...state,passwordError:action.errorMessagePassword}
        default:
            return {...state}
    }
}

export const errorLoginEmailAC = (errorMessage:string) => {
    return {
        type:"ERROR-EMAIL",
        errorMessage
    }
}
export const errorLoginPasswordAC = (errorMessagePassword:string) => {
    return {
        type:"ERROR-PASSWORD",
        errorMessagePassword
    }
}