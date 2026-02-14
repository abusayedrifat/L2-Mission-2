import { Server } from "node:http";
import app from "./app";
import mongoose from "mongoose";
import dns from 'dns'

let server: Server;
dns.setServers(["1.1.1.1", "8.8.8.8"])
const PORT = 5000

async function main() {

    try {
        await mongoose.connect("mongodb+srv://abusayedrifat0131:EagencUZoq9pd1nx@cluster0.faxnq.mongodb.net/todosDB?appName=Cluster0"); // This fixes querySrv ECONNREFUSED errors caused by DNS issues on certain networks. Node.js uses its own DNS resolver, which may fail to resolve SRV records on some Windows or restricted networks. In such cases, forcing Node.js to use public DNS servers before creating the MongoDB Atlas connection ensures SRV lookup works correctly.

console.log('connected to todoAPP');

        server = app.listen(PORT, () => {
            console.log(`listening from port : ${PORT}`);

        })
    } catch (error) {
        console.log(error);

    }
}


main()