"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const encuesta1_network_1 = __importDefault(require("./encuesta1.network"));
const encuesta1 = express_1.default();
encuesta1.use('/encuesta1', encuesta1_network_1.default);
exports.default = encuesta1;
