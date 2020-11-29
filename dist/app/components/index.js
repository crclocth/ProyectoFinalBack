"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = __importDefault(require("./admin"));
const index_1 = __importDefault(require("./user/index"));
const index_2 = __importDefault(require("./sugerencia/index"));
const index_3 = __importDefault(require("./recuperar/index"));
const index_4 = __importDefault(require("./encuesta1/index"));
const components = [
    admin_1.default, index_1.default, index_2.default, index_3.default, index_4.default
];
exports.default = components;
