import {instance} from "./instance";

export const packsAPI = {
    getPacks: (params: GetPacksRequestType)=> {
        return instance.get<GetPacksResponseType>('cards/pack', {params})
    },
    getPacksSortUp: (sortPacks: number) => {
        return instance.get(`cards/pack?sortPacks=${1}cardsCount`)
    },
    getPacksSortDown: (sortPacks: number) => {
        return instance.get(`cards/pack?sortPacks=${0}cardsCount`)
    },
    pagination: (page: number, pageCount: number)=> {
        return instance.get<GetPacksResponseType>(`cards/pack?page=${page}&pageCount=${pageCount}`)
    }
}

// types
export type GetPacksRequestType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: number
    page?: number
    pageCount?: number
    user_id?: string
}

type GetPacksResponseType = {
    cardPacks: Array<GetPackType>
    page: number
    pageCount: number
    cardPacksTotalCount: number
    minCardsCount: number
    maxCardsCount: number
    token?: string
    tokenDeathTime?: number
}

type GetPackType = {
    _id: string
    user_id: string
    user_name?: string
    private: boolean
    name: string
    path: string
    grade: number
    shots: number
    cardsCount: number
    type: "pack" | "folder"
    rating: number
    created: string
    updated: string
    more_id?: string
    __v: number
}

