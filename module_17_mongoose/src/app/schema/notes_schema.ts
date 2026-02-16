import { model, Schema } from "mongoose";





// Note variable works like as a 'class'

// const noteSchema = new Schema({
//     title: String, //todo: this is shorthand types. we should avoid this and conventional object type types
//     content: {type:String, default:''} //todo: conventional types
// })

const noteSchema = new Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, default: '' },
    category: {
        type: String,
        enum: ['personal', 'work', 'study', 'research'],
        default: 'personal'
    },
    pinned: { type: Boolean, default: false },
    tags: {
        label: { type: String, required: true },
        color: { type: String, default: 'gray' }
    }
},
    {
        versionKey: false,
        timestamps: true
    }

)

export const Note = model('Note', noteSchema)

