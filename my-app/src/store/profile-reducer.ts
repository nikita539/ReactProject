import {Dispatch} from 'redux'
import {Api} from "../API/API";

export type stateProfileType = {
    name:string,
    avatar:string
}
const initialStateProfile = {
    name:"",
    avatar:""
}


type typeGetProfileData = {
    type:"GET-PROFILE-DATA"
    name:string,
    avatar:string | undefined
}
type actionProfileType  = typeGetProfileData


export const profileReducer = (state:stateProfileType = initialStateProfile ,action:actionProfileType) => {
    switch (action.type){
        case "GET-PROFILE-DATA":
            return {...state,name:action.name,avatar:action.avatar}
        default:
            return {...state}
    }
}

const profileGetDataAC = (name:string,avatar:string | undefined) => {
    return {
        type:"GET-PROFILE-DATA",
        name,
        avatar
    }
}

export const profileDateThunk = () => {
    return(dispatch:Dispatch) => {
        Api.profileDate()
            .then((res) => {
                dispatch(profileGetDataAC(res.data.name,res.data.avatar))
            }).catch((error) => {

        })
    }
}