"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sugerencia_repository_1 = __importDefault(require("./sugerencia.repository"));
function getSugerencia() {
    return sugerencia_repository_1.default.getSugerencia();
}
function getSugerenciaById(id) {
    return sugerencia_repository_1.default.getSugerenciaById(id);
}
function patchSugerencia(id, sugerencia) {
    return sugerencia_repository_1.default.patchSugerencia(id, sugerencia);
}
function deleteSugerencia(id) {
    return sugerencia_repository_1.default.deleteSugerencia(id);
}
function addSugerencia(user) {
    var _a, _b;
    user.nombres = (_a = user.nombres) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    user.email = (_b = user.email) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    return sugerencia_repository_1.default.addSugerencia(user);
}
exports.default = { addSugerencia, getSugerencia, getSugerenciaById, patchSugerencia, deleteSugerencia };
