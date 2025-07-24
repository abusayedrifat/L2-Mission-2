
const path = require("path");
const fs = require("fs");
const { timeStamp } = require("console");
console.log( process.argv );

const inputArguments =  process.argv.slice(2)
console.log(inputArguments);

const text = inputArguments.join(" ").concat("\n");
const timestamp = new Date().toISOString();
const message = `${text} ${timestamp} \n`

if (!message) {
    console.log("❌ please provide a message to log");
    console.log("Example : Hello world");
    process.exit(1)
}

const filePath = path.join(__dirname,"log.txt")
console.log(filePath);

fs.appendFile(filePath,message,{encoding:'utf8'},()=>{
    console.log("Your log added successfully");
    
})

 




