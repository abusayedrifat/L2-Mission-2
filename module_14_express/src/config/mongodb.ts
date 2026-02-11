import { MongoClient, ServerApiVersion } from "mongodb";


const uri =
  "mongodb+srv://abusayedrifat0131:yNIG2GDWa26eTmRt@cluster0.faxnq.mongodb.net/todosDB?appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});