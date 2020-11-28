"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recuperar_repository_1 = __importDefault(require("./recuperar.repository"));
function getRecuperar() {
    return recuperar_repository_1.default.getRecuperar();
}
function getRecuperarById(id) {
    return recuperar_repository_1.default.getRecuperarById(id);
}
function patchRecuperar(id, recuperar) {
    return recuperar_repository_1.default.patchRecuperar(id, recuperar);
}
function deleteRecuperar(id) {
    return recuperar_repository_1.default.deleteRecuperar(id);
}
function addRecuperar(recuperar) {
    var _a;
    recuperar.email = (_a = recuperar.email) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    return recuperar_repository_1.default.addRecuperar(recuperar);
}
exports.default = { addRecuperar, getRecuperar, getRecuperarById, patchRecuperar, deleteRecuperar };
