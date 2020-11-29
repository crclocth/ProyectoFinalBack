"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const encuesta3_network_1 = __importDefault(require("./encuesta3.network"));
const encuesta3 = express_1.default();
encuesta3.use('/encuesta3', encuesta3_network_1.default);
exports.default = encuesta3;
