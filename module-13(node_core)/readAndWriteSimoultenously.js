const fs = require('fs')

console.log('task-2');
fs.readFile('./hello.text',{encoding:'utf-8'},(err,data)=>{
    if (err) {
        console.log("something went wrong",err);
        return;
    }

    fs.writeFile('./hellowWorld.text',data,{encoding:'utf-8'},(err)=>{
        if (err) {
            console.log("something went wrong",err);
            return;
        }
        console.log("file written successfully");
        
    })
    
})



