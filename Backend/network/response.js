"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.success = void 0;
function success(res, message, status) {
    res.status(status || 200).send({
        error: '',
        body: message
    });
}
exports.success = success;
function error(res, message, status) {
    res.status(status || 400).send({
        error: message,
        body: ''
    });
}
exports.error = error;
