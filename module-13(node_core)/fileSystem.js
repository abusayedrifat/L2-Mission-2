 

// todo:===================== fileSystem in synchronus way ======================//



const fs = require("fs");

// console.log('task 1');
// const text = 'learning file systemsss';
// fs.writeFileSync('./hello.text',text);


// console.log('task 2');
// const data = fs.readFileSync("./hello.text",{encoding:'utf-8'});
// console.log(data);


// console.log('task 3');
// console.log(text);



//* look closely. For "Syncronus" operation we used ("fs.writeFileSync","fs.readFileSync" etc.)



//todo:===================== fileSystem asncronus way ========================//



console.log('task-1');
let text = "node.js";


console.log('task-2');
fs.readFile('./hello.text',{encoding:'utf-8'},(err,data)=>{
    if (err) {
        console.log("something went wrong",err);
        return;
    }

    text = data
    console.log(text,"inside callback");
    
})



console.log(text);









