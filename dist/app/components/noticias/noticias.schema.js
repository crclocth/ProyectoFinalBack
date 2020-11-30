"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    titulo: { type: String, required: true },
    contenido: { type: String, required: true },
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Noticias', schema, 'noticias');
