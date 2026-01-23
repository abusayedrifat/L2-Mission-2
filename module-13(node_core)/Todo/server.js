const http = require('http');
const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, "./db/todo.json")



const server = http.createServer((req, res) => {

  const url = new URL(req.url, `http://${req.headers.host}`)
  const pathname = url.pathname
  console.log(url);
  console.log(req.url, req.method);
  // res.end("welcome to my ToDo app server")

  //* get all totdos
  if (pathname === "/todos" && req.method === "GET") {

    const data = fs.readFileSync(filePath, {
      encoding: 'utf-8'
    })

    // res.end("All Todos")

    // res.setHeader("content-type",'text/palin')
    // res.setHeader("email",'rifat@gmail.com')
    // res.statusCode = 202
    res.writeHead(200, {
      'content-type': 'application/json',
      // 'content-type':'text/html',
      // "email":'rifat@gmail.com'

    })
    // res.end(JSON.stringify(data))
    res.end(data)
  }

  //* POST todo
  else if (pathname === "/todos/create-todo" && req.method === "POST") {

    let data = ""
    req.on("data", (chunk) => {
      data = data + chunk
    })

    req.on("end", () => {
      console.log(data);
      const {
        title,
        body
      } = JSON.parse(data)
      
      console.log({
        title,
        body
      });

      const createdAt = new Date().toLocaleString();

      const allTodos = fs.readFileSync(filePath, {
        encoding: 'utf-8'
      })

      const parseAllTodos = JSON.parse(allTodos)
      console.log(parseAllTodos);

      parseAllTodos.push({
        title,
        body,
        createdAt
      })

      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
        encoding: 'utf-8'
      })
      res.end(JSON.stringify({
        title,
        body,
        createdAt
      }), null, 2)
    })

    res.end("Todo created")
  }


  //* get single todo
  else if (pathname === "/todo" && req.method === "GET") {
    const title = url.searchParams.get("title");
    console.log(title);
    const data = fs.readFileSync(filePath, {
      encoding: "utf-8"
    });
    const parsedData = JSON.parse(data);

    const todo = parsedData.find((todo) => todo.title === title);

    const stringifiedTodo = JSON.stringify(todo);
    res.writeHead(200, {
      "content-type": "application/json",
    })
    res.end(stringifiedTodo)
  }


  //* update a todo
  else if (pathname === "/todos/update-todo" && req.method === "PATCH") {
    const title = url.searchParams.get("title");
    let data = "";

    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const {
        body
      } = JSON.parse(data);

      const allTodos = fs.readFileSync(filePath, {
        encoding: "utf-8"
      });
      const parsedAllTodos = JSON.parse(allTodos);

      const todoIndex = parsedAllTodos.findIndex(
        (todo) => todo.title === title
      );

      parsedAllTodos[todoIndex].body = body;

      fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), {
        encoding: "utf-8",
      })
    })

  } else {
    res.end('Error(404): Not Found')
  }
})



server.listen(5000, "127.0.0.1", () => {
  console.log("listening from port 5000");


})




/**
 * /todos - GET --> all todos
 * //
 */


// else if (pathname === "/todo"  && req.method==='GET') {
//         // res.end('get single todo');
//         const title = url.searchParams.get("title")
//         console.log(title);
//         const data = fs.readFileSync(filePath, {
//             encoding: 'utf-8'
//         })
//         const parseData = JSON.parse(data);
//         const todo = parseData.find((todo)=>{
//             todo.title === title
//         })
//         const stringifiedTodo = JSON.stringify(todo);
//         res.writeHead(200,{
//             "content-type" : 'application/json'
//         })

//         res.end(stringifiedTodo);

//     }

//  else if (pathname === 'todos/update-todo' && req.method === "PATCH") {

//         const title = url.searchParams.get('title')
//         let data = "";

//         req.on("data",(chunk)=>{
//             data = data+chunk
//         })

//         req.on("end", ()=>{
//             const {body} = JSON.parse(data)

//             const allTodos = fs.readFileSync(filePath,{encoding:'utf-8'})
//             const paresedAllTodos = JSON.parse(allTodos)

//             const totdoIndex = paresedAllTodos.findIndex((todo)=> todo.title === title)

//             paresedAllTodos[totdoIndex] = body;

//             fs.writeFileSync(filePath, JSON.stringify(paresedAllTodos, null, 2), {encoding:'utf-8'})
//         })

//         res.end( JSON.stringify(
//             {title,body, createdAt: paresedAllTodos[totdoIndex].createdAt}, null,2
//         ))
//     }