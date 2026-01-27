// import { Response } from 'express';
// import { Request } from 'express';


import express, { Application, NextFunction, Request, Response, } from 'express';
import path, { dirname } from 'path';
import fs from 'fs';
import { todosRouter } from './todos/todos.routes';

const app: Application = express()
app.use(express.json())
app.use('/todos', todosRouter)




const filePath = path.join(__dirname, "../../DB/data.json")



app.get('/', (req: Request, res: Response , next:NextFunction) => {
  // console.log({res})

  res.send('Hello World!')
  next()
})


app.use((error:any, req:Request ,res: Response , next:NextFunction)=>{
  if (error) {
    console.log('error', error);
    
    res.status(400).json({
      message: 'something went wrong',
      error
    })
  }
})









export default app;


//[app] - [express.json()] - [todosRouter] - [get - '/todos'] - [post - '/todos/create_todo' ]