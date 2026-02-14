
import express, { Application, NextFunction, Request, Response, } from 'express';
import { model, Schema } from 'mongoose';

const app:Application = express()


app.get('/',(req:Request, res:Response)=>{
    res.send('suever running through mongoose')
})

const noteSchema = new Schema({
    title: String,
    content: String
})


const Note = model('Note', noteSchema) // Note variable works like as a 'class'

app.post('/create-post',(req:Request, res:Response)=>{
    
   const myNote = new Note({
        title:'learinig mongoose',
        content:'it is fun to learn mongoose'
    })

    res.status(201).json({
        success: true,
        message:"Note created successfully",
        note: myNote
    })
})






export default app 