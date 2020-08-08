"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinatePicoYPlaca = exports.detHour = exports.getLastNumberPlaca = exports.getDayOfWeek = exports.determinateDateEarlier = exports.getDateFormat = void 0;
function getDateFormat(date) {
    var day = Number(date.substr(0, 2));
    var month = Number(date.substr(3, 2));
    var year = Number(date.substr(6, 4));
    return new Date(year, month, day);
}
exports.getDateFormat = getDateFormat;
function determinateDateEarlier(date) {
    if (date < new Date()) {
        return false;
    }
    return true;
}
exports.determinateDateEarlier = determinateDateEarlier;
function getDayOfWeek(date) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[date.getDay()];
    return day;
}
exports.getDayOfWeek = getDayOfWeek;
function getLastNumberPlaca(placa) {
    return Number(placa.substr(placa.length - 1));
}
exports.getLastNumberPlaca = getLastNumberPlaca;
function detHour(hour) {
    var hour1 = new Date(0, 0, 0, 7, 0);
    var hour2 = new Date(0, 0, 0, 9, 30);
    var hour3 = new Date(0, 0, 0, 16, 0);
    var hour4 = new Date(0, 0, 0, 19, 30);
    var hh = Number(hour.substr(0, 2));
    var mm = Number(hour.substr(3, 2));
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
function determinatePicoYPlaca(placa, date, hour) {
    var day = getDayOfWeek(getDateFormat(date));
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
    if (pico[day] && detHour(hour) && pico[day].indexOf(lastnumber) != 1) {
        return true;
    }
    else {
        return false;
    }
}
exports.determinatePicoYPlaca = determinatePicoYPlaca;
;
