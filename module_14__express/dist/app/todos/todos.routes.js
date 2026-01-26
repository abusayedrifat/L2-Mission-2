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
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("../../config/mongodb");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosCollection = mongodb_1.client.db("todosDB").collection("todos");
    const cursor = todosCollection.find({});
    const todos = yield cursor.toArray();
    res.json({
        message: "from todosRouterrr",
        todos,
    });
}));
// app.get('/allTodo',( req:Request, res:Response) =>{
//   const data = fs.readFileSync(filePath, {encoding:"utf-8"})
//   res.json(data)
//   console.log("from query",req.query);
//   console.log("from params",req.params);
// })
exports.todosRouter.post("/create_todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosCollection = mongodb_1.client.db("todosDB").collection("todos");
    const todos = req.body;
    const { title, description, priority } = todos;
    console.log(todos);
    todosCollection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isComplete: false
    });
    res.json(todos);
}));
exports.todosRouter.put("/updateTodo", (req, res) => {
    const data = req.body;
    res.send("updated data");
});
exports.todosRouter.delete("/detailsTodo", (req, res) => {
    res.send("hello. todos deleted");
});
