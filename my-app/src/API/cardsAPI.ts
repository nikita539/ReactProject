import {instance} from "./instance";

export const cardsAPI = {
    getCards: (params: CardRequestType) => {
        return instance.get<CardsResponseType>('cards/card', {params})
    },
    addCards:(packs_ID:string) => {
        return instance.post<CardsResponseType>("cards/card",{card:{cardsPack_id:packs_ID}})
    }
}

// types
export type CardRequestType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id?: string
    min?: number
    max?: number
    sortCards?: string
    page?: number
    pageCount?: number
}

export type CardsResponseType = {
    cards: Array<Card>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export type Card = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}