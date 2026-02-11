"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(__dirname, '../../db/todo.json');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    console.log({ req, res });
    res.send('my enhanced server is running with typescript');
});
// app.get('/todos', (req:Request, res:Response)=>{
//     const data = fs.readFileSync(filepath , {encoding:"utf-8"})
//     // console.log(data);
//     res.send( data)
// })
app.post('/todos/create-todo', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('my enhanced server is running with typescript');
});
app.get('/todos/:title/:body', (req, res) => {
    console.log("from query", req.query);
    console.log("from params", req.params);
    const data = fs_1.default.readFileSync(filepath, { encoding: "utf-8" });
    // console.log(data);
    res.send(data);
});
exports.default = app;
/**
 * app --> app will handle middleware, route related
 * app folder --> app business logic handling like CRUD, database related works`
 */ 
