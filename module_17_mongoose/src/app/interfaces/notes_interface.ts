import { Types } from "mongoose"

export interface notes{
    title:string,
    content: string,
    category: 'personal'| 'work'| 'study' | 'research',
    pinned: boolean,
    tags:{
        label:string,
        color: string
    },
    user: Types.ObjectId
}