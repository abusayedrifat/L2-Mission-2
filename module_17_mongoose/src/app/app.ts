
import express, { Application, NextFunction, Request, Response, } from 'express';
import { notesRoutes } from './controller/notes_routes';

const app:Application = express()
app.use(express.json())
                          
//* --> notesRoutes
app.use('/notes', notesRoutes)



app.get('/',(req:Request, res:Response)=>{
    res.send('suever running through mongoose')
})






export default app 