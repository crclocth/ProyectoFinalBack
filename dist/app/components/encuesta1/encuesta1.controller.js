"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encuesta1_repository_1 = __importDefault(require("./encuesta1.repository"));
function getEncuesta1() {
    return encuesta1_repository_1.default.getEncuesta1();
}
function getEncuesta1ById(id) {
    return encuesta1_repository_1.default.getEncuesta1ById(id);
}
function patchEncuesta1(id, encuesta1) {
    return encuesta1_repository_1.default.patchEncuesta1(id, encuesta1);
}
function deleteEncuesta1(id) {
    return encuesta1_repository_1.default.deleteEncuesta1(id);
}
function addEncuesta1(encuesta1) {
    var _a;
    encuesta1.email = (_a = encuesta1.email) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    return encuesta1_repository_1.default.addEncuesta1(encuesta1);
}
exports.default = { addEncuesta1, getEncuesta1, getEncuesta1ById, patchEncuesta1, deleteEncuesta1 };
