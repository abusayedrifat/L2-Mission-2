
import express, { Application, NextFunction, Request, Response, } from 'express';
import { model, Schema } from 'mongoose';

const app:Application = express()


app.get('/',(req:Request, res:Response)=>{
    res.send('suever running through mongoose')
})

// const noteSchema = new Schema({
//     title: String, //todo: this is shorthand types. we should avoid this and conventional object type types
//     content: {type:String, default:''} //todo: conventional types
// })
const noteSchema = new Schema({
    title:{type: String, require:true},
    content:{type: String, default:''},
    category:{
        type: String,
        enum: ['personal', 'work', 'study', 'research'],
        default:'personal'
    },
    pinned:{ type: Boolean, default:false },
    tags:{
        label:{type: String, require:true},
        color:{type: String, default:'gray'}
    }
})


const Note = model('Note', noteSchema) // Note variable works like as a 'class'

app.post('/create-post',async (req:Request, res:Response)=>{
    
   const myNote = new Note({
        title:'learinig mongoose',
        content:'it is fun to learn mongoose',
        tags:{
            label:'story'
        }
    })

    await myNote.save()

    res.status(201).json({
        success: true,
        message:"Note created successfully",
        note: myNote
    })
})






export default app 