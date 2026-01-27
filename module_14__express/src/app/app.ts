

import express, { Application, NextFunction, Request, Response, } from 'express';
import { todosRouter } from './todos/todos.routes';

const app: Application = express()
app.use(express.json())
app.use('/todos', todosRouter)




app.get('/', (req: Request, res: Response , next:NextFunction) => {
  // console.log({res})

  res.send('Hello World!')
  next()
})


app.get('/error', 
  
  async(req:Request, res:Response, next:NextFunction)=>{
 try {
  
  res.send('error er duniya')
 } catch (error) {
  next(error)
 }


})





app.use((req:Request , res:Response )=>{
  res.status(404).json({
    message:"routes not found"
  })
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