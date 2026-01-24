

import express, { Application, Request, Response, } from 'express';
import path, { dirname } from 'path';
import fs from 'fs';
import { todosRouter } from './todos/todos.routes';
// const express = require('express')

const app: Application = express()
const port = 5000
app.use(express.json())
app.use('/todos', todosRouter)

const filePath = path.join(__dirname, "../../DB/data.json")



app.get('/', (req: Request, res: Response) => {
  // console.log({res})

  res.send('Hello World!')

})










export default app;


//[app] - [express.json()] - [todosRouter] - [get - '/todos'] - [post - '/todos/create_todo' ]