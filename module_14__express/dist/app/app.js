"use strict";
// import { Response } from 'express';
// import { Request } from 'express';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todos_routes_1 = require("./todos/todos.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/todos', todos_routes_1.todosRouter);
const filePath = path_1.default.join(__dirname, "../../DB/data.json");
app.get('/', (req, res, next) => {
    // console.log({res})
    res.send('Hello World!');
    next();
});
app.use((error, req, res, next) => {
    if (error) {
        console.log('error', error);
        res.status(400).json({
            message: 'something went wrong',
            error
        });
    }
});
exports.default = app;
//[app] - [express.json()] - [todosRouter] - [get - '/todos'] - [post - '/todos/create_todo' ]
