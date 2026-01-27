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
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./todos/todos.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/todos', todos_routes_1.todosRouter);
app.get('/', (req, res, next) => {
    // console.log({res})
    res.send('Hello World!');
    next();
});
app.get('/error', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('error er duniya');
    }
    catch (error) {
        next(error);
    }
}));
app.use((req, res) => {
    res.status(404).json({
        message: "routes not found"
    });
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
