"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service = require("../services/picoPlacaService");
var Placa = /** @class */ (function () {
    function Placa(placa, date, time) {
        this.placa = placa;
        this.date = date;
        this.time = time;
    }
    Placa.prototype.determinateCirculation = function () {
        service.determinatePicoYPlaca(this.placa, this.date, this.time);
    };
    return Placa;
}());
