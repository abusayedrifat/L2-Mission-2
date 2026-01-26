import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { client } from "../../config/mongodb";

export const todosRouter = express.Router();


todosRouter.get("/", async (req: Request, res: Response) => {

    const todosCollection = client.db("todosDB").collection("todos");
    const cursor = todosCollection.find({})
    const todos = await cursor.toArray()

    res.json({
        message: "from todosRouterrr",
        todos,
    });
});

// app.get('/allTodo',( req:Request, res:Response) =>{

//   const data = fs.readFileSync(filePath, {encoding:"utf-8"})
//   res.json(data)
//   console.log("from query",req.query);
//   console.log("from params",req.params);

// })

todosRouter.post("/create_todo", async (req: Request, res: Response) => {
    
    const todosCollection = client.db("todosDB").collection("todos");
   
    const todos = req.body;
    const { title, description, priority } = todos;
    console.log (todos);
    

    todosCollection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isComplete: false
    })
    res.json(todos)

});

todosRouter.put("/updateTodo", (req: Request, res: Response) => {
    const data = req.body;
    res.send("updated data");
});

todosRouter.delete("/detailsTodo", (req: Request, res: Response) => {
    res.send("hello. todos deleted");
});
