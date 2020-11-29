"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const encuesta2_network_1 = __importDefault(require("./encuesta2.network"));
const encuesta2 = express_1.default();
encuesta2.use('/encuesta2', encuesta2_network_1.default);
exports.default = encuesta2;
