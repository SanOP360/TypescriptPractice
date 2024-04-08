"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var todos_1 = require("./routes/todos");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use('/todos', todos_1.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
exports.default = app;
