import express, { Request, Response } from "express";
import { Note } from "../schema/notes_schema";


export const notesRoutes = express.Router()


notesRoutes.get('/', async (req: Request, res: Response) => {
    const allNotes = await Note.find().populate('user')
    res.json(allNotes)
})


notesRoutes.post('/create-note', async (req: Request, res: Response) => {

    const body = req.body;

    //     //* notesRoutesroach-1
    //    const myNote = new Note({
    //         title:'learinig mongoose',
    //         content:'it is fun to learn mongoose',
    //         tags:{
    //             label:'story'
    //         }
    //     })

    //     await myNote.save()

    
    //* notesRoutesroach-2
    const myNote = await Note.create(body)

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        myNote
    })
})


notesRoutes.get('/:noteID', async (req: Request, res: Response) => {
    const noteID = req.params.noteID;
    const note = await Note.findById(noteID)
    res.json(note)
})

notesRoutes.patch('/update/:updateID', async (req: Request, res: Response) => {
    const updateID = req.params.updateID;
    const updateBody = req.body;
    const updateNote = await Note.findByIdAndUpdate(updateID, updateBody, { new: true });

    res.json(updateNote)

})
notesRoutes.delete('/delete/:deleteID', async (req: Request, res: Response) => {
    const deleteID = req.params.deleteID;
    const deleteNote = await Note.findByIdAndDelete(deleteID, { new: true });

    res.json(deleteNote)

})
