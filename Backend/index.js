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
app.post('/s', function (req, res) {
    console.log(req.body);
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
        console.log(error);
        console.log(model.errors);
        response.error(res, model.errors[error], 400);
    }
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
