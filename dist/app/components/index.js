"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = __importDefault(require("./admin"));
const index_1 = __importDefault(require("./user/index"));
const index_2 = __importDefault(require("./sugerencia/index"));
const components = [
    admin_1.default, index_1.default, index_2.default
];
exports.default = components;
