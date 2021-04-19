import {instance} from "./instance";

export const packsAPI = {
    getPacks: (params: GetPacksRequestType)=> {
        return instance.get<GetPacksResponseType>('cards/pack?user_id=' + "606b7897ca54343f745ebeb1", {params})
    },
    postPacks: () => {
        return instance.post('cards/pack',{cardsPack:{name:"Alina",user_id:'606b7897ca54343f745ebeb1',private:true}})
    },
    getPacksSortUp: (sortPacks: number) => {
        return instance.get(`cards/pack?sortPacks=${1}cardsCount`)
    },
    getPacksSortDown: (sortPacks: number) => {
        return instance.get(`cards/pack?sortPacks=${0}cardsCount`)
    },
    pagination: (page: number, pageCount: number)=> {
        return instance.get<GetPacksResponseType>(`cards/pack?pageCount${pageCount}&page=${page}`)
    },
    deleteItemsTable:(id:string) => {
        return instance.delete(`cards/pack?id=${id}`)
    },
    changeNameItem:(_id:string,name:string) => {
        return instance.put('cards/pack',{cardsPack:{_id,name}})
    }
}

// types
export type GetPacksRequestType = {
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
}

export type GetPackType = {
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

