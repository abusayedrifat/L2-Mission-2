
import  express, {Application, Request, Response,  } from 'express';
import path, { dirname } from 'path';

import fs from 'fs';
// const express = require('express')

const app:Application = express()
const port = 5000
app.use(express.json())

const filePath = path.join(__dirname,"../../DB/data.json")

app.get('/', (req:Request, res:Response) => {
  // console.log({res})
  
  res.send('Hello World!iiii. hi. hello')
  
})

app.get('/allTodos',( req:Request, res:Response) =>{

  const data = fs.readFileSync(filePath, {encoding:"utf-8"})
  res.json(data)
  console.log(data);
  
})

app.post('/todos/create_todo', (req:Request, res:Response)=>{
  const data = req.body;
  res.send('hello')
  const {title, body} = data
  console.log(data);
  console.log(title );
  console.log(body );
  
  
})


export default app; 