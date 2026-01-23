"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// const express = require('express')
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
const filePath = path_1.default.join(__dirname, "../../DB/data.json");
app.get('/', (req, res) => {
    // console.log({res})
    res.send('Hello World!iiii. hi. hello');
});
app.get('/allTodos', (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    res.json(data);
    console.log(data);
});
app.post('/todos/create_todo', (req, res) => {
    const data = req.body;
    res.send('hello');
    const { title, body } = data;
    console.log(data);
    console.log(title);
    console.log(body);
});
exports.default = app;
