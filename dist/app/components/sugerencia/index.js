"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sugerencia_network_1 = __importDefault(require("./sugerencia.network"));
const user = express_1.default();
user.use('/sugerencia', sugerencia_network_1.default);
exports.default = user;