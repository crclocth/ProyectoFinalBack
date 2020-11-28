"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    nombres: { type: String, required: true },
    email: { type: String, required: true },
    contraseña: { type: String, required: true },
    contraseñaRepetida: { type: String, required: true }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('User', schema, 'user');
