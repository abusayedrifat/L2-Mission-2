"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.todosRouter = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../../DB/data.json");
exports.todosRouter.get('/', (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log('from todosRouter');
    res.json({
        message: "from todosRouterrr",
        data
    });
});
// app.get('/allTodo',( req:Request, res:Response) =>{
//   const data = fs.readFileSync(filePath, {encoding:"utf-8"})
//   res.json(data)
//   console.log("from query",req.query);        
//   console.log("from params",req.params);
// })
exports.todosRouter.post('/create_todo', (req, res) => {
    const data = req.body;
    res.send('hello');
    const { title, body } = data;
    console.log(data);
    console.log(title);
    console.log(body);
});
