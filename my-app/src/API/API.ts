import {instance} from "./instance";


type pingType = {
    backTime: number
    frontTime: string
    info: string
    ping: number
}
type LogInType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    update: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}
type RegisterType = {
    addedUser: {
        created: Date
        email: string
        isAdmin: boolean
        name: string
        publicCardPacksCount: number
        updated: Date
        verified: boolean
        __v: number
        _id: string
    }
    error?: string
}
type profileDateType = {
    _id:string
    email:string
    name:string
    avatar?:string
    publicCardsPacksCount:number;

    created:Date
    updated:Date
    isAdmin:boolean,
    verified:boolean,
    rememberMe:boolean,

    error?:string
}

export type RecoveryResponseType = {
    info?: string
    error?: string
}

export const Api = {
    getPing: () => {
        const promise = instance.get<pingType>("ping")
        return promise
    },
    logIn: (email: string, password: string) => {
        const promise = instance.post<LogInType>("auth/login", {email, password})
        return promise
    },
    register: (email: string, password: string) => {
        const promise = instance.post<RegisterType>("auth/register", {email, password})
        return promise
    },
    recoveryPassword: (email: string | undefined) => {
        const from = `dmytrostorozhenko1994@gmail.com`
        const message =
            `<div>Your password recover link is <a href='http://localhost:3000/#/set-new-password/$token$'>here</a></div>`
        return instance.post<RecoveryResponseType>("auth/forgot", {email, from, message})
    },
    profileDate:() => {
        const promise = instance.post<any>("auth/me",{})
        return promise
    },
    profileUpdate:(name:string,avatar:string) => {
        const promise = instance.put("auth/me",{name,avatar})
        return promise
    }
}