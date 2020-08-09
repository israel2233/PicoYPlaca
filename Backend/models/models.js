"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = exports.PicoYPlaca = void 0;
var service = require("../services/picoPlacaService");
var PicoYPlaca = /** @class */ (function () {
    function PicoYPlaca(placa, date, time) {
        this.placa = placa;
        this.date = date;
        this.time = time;
    }
    PicoYPlaca.prototype.determinateCirculation = function () {
        return service.determinePicoYPlaca(this.placa, this.date, this.time);
    };
    return PicoYPlaca;
}());
exports.PicoYPlaca = PicoYPlaca;
exports.errors = {
    1: 'The date is earlier!',
    2: 'The date is invalid',
    3: 'The hour is invalid',
    4: '"Placa" is Incorrect!',
};
