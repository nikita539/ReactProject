import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:7542/2.0/",
    withCredentials:true
})


type pingType = {
    backTime:number
    frontTime:string
    info:string
    ping:number
}
type LogInType = {
    _id:string
    email:string
    name:string
    avatar?:string
    publicCardPacksCount:number
    created:Date
    update:Date
    isAdmin:boolean
    verified:boolean
    rememberMe:boolean
    error?:string
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
    error?:string
}

export type RecoveryResponseType = {
    info?: string
    error?: string
}

export const Api = {
    getPing:() => {
        const promise = instance.get<pingType>("ping")
        return promise
    },
    logIn:(email:string,password:string) => {
        const promise = instance.post<LogInType>("auth/login",{email,password})
        return promise
    },
    register:(email:string,password:string) => {
        const promise = instance.post<RegisterType>("auth/register",{email,password})
        return promise
    },
    recoveryPassword: (email: string | undefined) => {
        const from = `test-front-admin <dmytrostorozhenko1994@gmail.com>`
        const message =
            `<div>password recover link: <a href='http://localhost:3000/#/set-new-password/$token$'></a></div>`
        return instance.post<RecoveryResponseType>("auth/forgot", {email, from, message})
    }
}