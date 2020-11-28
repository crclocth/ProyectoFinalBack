"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recuperar_network_1 = __importDefault(require("./recuperar.network"));
const recuperar = express_1.default();
recuperar.use('/recuperar', recuperar_network_1.default);
exports.default = recuperar;
