"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
let server;
const port = 5000;
const mongodb_1 = require("mongodb");
const bootServer = () => __awaiter(void 0, void 0, void 0, function* () {
    server = app_1.default.listen(port, () => {
        console.log(`listening from ${port}`);
    });
});
const uri = "mongodb+srv://abusayedrifat0131:yNIG2GDWa26eTmRt@cluster0.faxnq.mongodb.net/?appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            const todosServer = client.db("todosDB").collection("todos");
            // await client.connect();
            // Send a ping to confirm a successful connection
            // await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        }
        finally {
            // Ensures that the client will close when you finish/error
            // await client.close();
        }
    });
}
run().catch(console.dir);
bootServer();
