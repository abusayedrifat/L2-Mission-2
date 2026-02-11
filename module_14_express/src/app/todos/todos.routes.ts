import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

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

todosRouter.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id 
    const todosCollection = client.db("todosDB").collection("todos");
    const cursor = await todosCollection.findOne( {_id : new ObjectId(id as string)} )// here we use "type assertion" for ensuring typescript that i know about the type more than u
    console.log(cursor);

    res.send(cursor)

})

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
    console.log(todos);

    todosCollection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isComplete: false
    })
    res.json(todos)

});

todosRouter.put("/updateTodo/:id",async (req: Request, res: Response) => {

    const id = req.params.id
    
    const todos = req.body;
    const { title, description, priority, isComplete } = todos
    const todosCollection = client.db("todosDB").collection("todos");
    const filterID = { _id: new ObjectId(id as string)}
    console.log(filterID);
    

    const updatedTodo = await todosCollection.updateOne(filterID, {
        $set: {
            title,
            description,
            priority,
            isComplete
        }
    },
        {
            upsert: true
        }

    )

    res.json(updatedTodo)
    console.log(updatedTodo);
    
});

todosRouter.delete("/delete_todo/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const todosCollection = client.db("todosDB").collection("todos");
    const cursor = await todosCollection.deleteOne({_id: new ObjectId(id as string)} )
    console.log(cursor);

    res.json(cursor);
});
