import {instance} from "./instance";

export const packsAPI = {
    getPacks: (params: GetPacksRequestType)=> {
        return instance.get<GetPacksResponseType>('cards/pack', {params})
    }
}

// types
type GetPacksRequestType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: string
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

