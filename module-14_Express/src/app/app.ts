
import express, { Application, Request, Response } from 'express';
import fs from "fs"
import path from "path"


const filepath = path.join(__dirname, '../../db/todo.json')
const app:Application = express()

app.use(express.json())

app.get('/', (req:Request, res:Response)=>{

    console.log({req,res});
    
    res.send('my enhanced server is running with typescript')
})
// app.get('/todos', (req:Request, res:Response)=>{

//     const data = fs.readFileSync(filepath , {encoding:"utf-8"})
//     // console.log(data);
//     res.send( data)

// })
app.post('/todos/create-todo', (req:Request, res:Response)=>{
    const data = req.body;
    console.log(data);
    res.send('my enhanced server is running with typescript')
})

app.get('/todos/:title/:body', (req:Request, res:Response)=>{
    console.log("from query", req.query);
    console.log("from params", req.params);
    const data = fs.readFileSync(filepath , {encoding:"utf-8"})
    // console.log(data);
    res.send( data)
    
})

export default app;

/**
 * app --> app will handle middleware, route related
 * app folder --> app business logic handling like CRUD, database related works`
 */