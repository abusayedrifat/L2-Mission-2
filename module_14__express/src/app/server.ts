
import app from "./app";

let server;
const port = 5000


const bootServer = async()=>{
    server = app.listen(port , ()=>{
        console.log(`listening from ${port}`);
        
    } )
}

bootServer()