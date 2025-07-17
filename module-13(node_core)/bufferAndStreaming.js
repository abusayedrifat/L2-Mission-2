const { error } = require('console');
const fs = require('fs');


const readStream = fs.createReadStream('./hellowWorld.txt',{ encoding:'utf-8'});
const writeStream = fs.createWriteStream('./hello.txt',{encoding:'utf-8'});

readStream.on("data",(data)=>{
    console.log(data);


    writeStream.write(data,(err)=>{
        if (err) {
            throw error("error",err)
        }
    }) 
})

readStream.on("error",(err)=>{
    if (err) {
            throw Error("error",err)
        }
})

writeStream.on("error",(err)=>{
    if (err) {
        
        throw Error ("error",err)
    }
})


readStream.on("end",()=>{
    console.log("reading completed");
    writeStream.end()
})

writeStream.on("finish",()=>{
    console.log("writting finished successfully");
    
})






