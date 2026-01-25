import { Collection } from './../../node_modules/mongodb/src/collection';

import app from "./app";

let server;
const port = 5000

import { MongoClient, ServerApiVersion } from 'mongodb'

const bootServer = async()=>{
    server = app.listen(port , ()=>{
        console.log(`listening from ${port}`);
        
    } )
}


const uri = "mongodb+srv://abusayedrifat0131:yNIG2GDWa26eTmRt@cluster0.faxnq.mongodb.net/?appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const todosServer = client.db("todosDB").collection("todos")
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

bootServer()