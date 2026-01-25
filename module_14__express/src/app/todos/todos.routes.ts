import express, { Request, Response } from 'express'
import path from 'path'
import fs from 'fs'

export const todosRouter = express.Router()


const filePath = path.join(__dirname, "../../../DB/data.json")

todosRouter.get('/', (req: Request, res: Response) => {

    const data = fs.readFileSync(filePath, { encoding: "utf-8" })
    console.log('from todosRouter');

    res.json({
        message: "from todosRouterrr",
        data
    })

})

// app.get('/allTodo',( req:Request, res:Response) =>{

//   const data = fs.readFileSync(filePath, {encoding:"utf-8"})
//   res.json(data)
//   console.log("from query",req.query);        
//   console.log("from params",req.params);

// })


todosRouter.post('/create_todo', (req: Request, res: Response) => {
    const data = req.body;
    res.send('hello')
    const { title, body } = data
    console.log(data);
    console.log(title);
    console.log(body);
})

todosRouter.put('/updateTodo',(req: Request, res: Response) => {
    const data = req.body;
    res.send('updated data')
    
})


todosRouter.delete('/detailsTodo',(req: Request, res: Response) => {
    res.send('hello. todos deleted')
   
})