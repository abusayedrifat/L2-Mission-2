
import express, { Application, NextFunction, Request, Response, } from 'express';
import { model, Schema } from 'mongoose';
const app:Application = express()
app.use(express.json())
                            

app.get('/',(req:Request, res:Response)=>{
    res.send('suever running through mongoose')
})

// const noteSchema = new Schema({
//     title: String, //todo: this is shorthand types. we should avoid this and conventional object type types
//     content: {type:String, default:''} //todo: conventional types
// })
const noteSchema = new Schema({
    title:{type: String, required:true, trim:true},
    content:{type: String, default:''},
    category:{
        type: String,
        enum: ['personal', 'work', 'study', 'research'],
        default:'personal'
    },
    pinned:{ type: Boolean, default:false },
    tags:{
        label:{type: String, required:true},
        color:{type: String, default:'gray'}
    }
},
{
    versionKey:false,
    timestamps:true
}


)


const Note = model('Note', noteSchema) // Note variable works like as a 'class'

app.post('/notes/create-post',async (req:Request, res:Response)=>{

    const body = req.body;
    
//     //* approach-1
//    const myNote = new Note({
//         title:'learinig mongoose',
//         content:'it is fun to learn mongoose',
//         tags:{
//             label:'story'
//         }
//     })

//     await myNote.save()

    //* approach-2
    const myNote = await Note.create(body)

    res.status(201).json({
        success: true,
        message:"Note created successfully",
        myNote
    })
})

app.get('/notes',async(req:Request, res:Response)=>{
    const allNotes = await Note.find()
    res.json(allNotes)
})

app.get('/notes/:noteID',async(req:Request, res:Response)=>{
    const noteID = req.params.noteID;
    const note = await Note.findById(noteID)
    res.json(note)
})

app.patch('/notes/update/:updateID', async(req:Request, res:Response)=>{
    const updateID = req.params.updateID;
    const updateBody = req.body;
    const updateNote = await Note.findByIdAndUpdate(updateID,updateBody,{new:true});

    res.json(updateNote)

})
app.delete('/notes/delete/:deleteID', async(req:Request, res:Response)=>{
    const deleteID = req.params.deleteID;
    const deleteNote = await Note.findByIdAndDelete(deleteID,{new:true});

    res.json(deleteNote)

})




export default app 