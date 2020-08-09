"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var model = require("./models/models");
var response = require("./network/response");
var bodyParser = require("body-parser");
var app = express();
var resp;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.post('/', function (req, res) {
    var picoYPlaca = new model.PicoYPlaca(req.body.placa, req.body.date, req.body.time);
    try {
        if (picoYPlaca.determinateCirculation()) {
            response.success(res, 'No se puede circular', 200);
        }
        else {
            response.success(res, 'Se puede circular', 200);
        }
    }
    catch (error) {
        response.error(res, model.errors[error], 400);
    }
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
