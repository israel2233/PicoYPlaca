"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinePicoYPlaca = exports.detHour = exports.getLastNumberPlaca = exports.getDayOfWeek = exports.determineDateEarlier = exports.getDateFormat = void 0;
function getDateFormat(date) {
    var day = Number(date.substr(0, 2));
    var month = Number(date.substr(3, 2));
    var year = Number(date.substr(6, 4));
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        throw 2;
    }
    else {
        return new Date(year, month - 1, day);
    }
}
exports.getDateFormat = getDateFormat;
function determineDateEarlier(date) {
    if (date < new Date()) {
        return false;
    }
    return true;
}
exports.determineDateEarlier = determineDateEarlier;
function getDayOfWeek(date) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[date.getDay()];
    return day;
}
exports.getDayOfWeek = getDayOfWeek;
function getLastNumberPlaca(placa) {
    if (isNaN(Number(placa))) {
        throw 4;
    }
    return Number(placa.substr(placa.length - 1));
}
exports.getLastNumberPlaca = getLastNumberPlaca;
function detHour(hour) {
    var hh = Number(hour.substr(0, 2));
    var mm = Number(hour.substr(3, 2));
    if (isNaN(hh) || isNaN(mm)) {
        throw 3;
    }
    var hour1 = new Date(0, 0, 0, 7, 0);
    var hour2 = new Date(0, 0, 0, 9, 30);
    var hour3 = new Date(0, 0, 0, 16, 0);
    var hour4 = new Date(0, 0, 0, 19, 30);
    var hourUser = new Date(0, 0, 0, hh, mm);
    if (hourUser >= hour1 && hourUser <= hour2) {
        return true;
    }
    else if (hourUser >= hour3 && hourUser <= hour4) {
        return true;
    }
    else {
        return false;
    }
}
exports.detHour = detHour;
function determinePicoYPlaca(placa, date, hour) {
    var datef = getDateFormat(date);
    if (!determineDateEarlier(datef)) {
        throw 1;
    }
    var day = getDayOfWeek(datef);
    var lastnumber = getLastNumberPlaca(placa);
    var pico = {
        Monday: [1, 2],
        Tuesday: [3, 4],
        Wednesday: [5, 6],
        Thursday: [7, 8],
        Friday: [9, 0],
        Saturday: [],
        Sunday: []
    };
    if (pico[day] && detHour(hour) && pico[day].indexOf(lastnumber) != -1) {
        return true;
    }
    else {
        return false;
    }
}
exports.determinePicoYPlaca = determinePicoYPlaca;
;
determinePicoYPlaca('860', "12/11/2020", '15:30');
