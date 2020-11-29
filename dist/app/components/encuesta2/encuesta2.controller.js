"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encuesta2_repository_1 = __importDefault(require("./encuesta2.repository"));
function getEncuesta2() {
    return encuesta2_repository_1.default.getEncuesta2();
}
function getEncuesta2ById(id) {
    return encuesta2_repository_1.default.getEncuesta2ById(id);
}
function patchEncuesta2(id, encuesta2) {
    return encuesta2_repository_1.default.patchEncuesta2(id, encuesta2);
}
function deleteEncuesta2(id) {
    return encuesta2_repository_1.default.deleteEncuesta2(id);
}
function addEncuesta2(encuesta2) {
    var _a;
    encuesta2.email = (_a = encuesta2.email) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    return encuesta2_repository_1.default.addEncuesta2(encuesta2);
}
exports.default = { addEncuesta2, getEncuesta2, getEncuesta2ById, patchEncuesta2, deleteEncuesta2 };
