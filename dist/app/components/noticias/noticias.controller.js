"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noticias_repository_1 = __importDefault(require("./noticias.repository"));
function getNoticias() {
    return noticias_repository_1.default.getNoticias();
}
function getNoticiasById(id) {
    return noticias_repository_1.default.getNoticiasById(id);
}
function patchNoticias(id, noticias) {
    return noticias_repository_1.default.patchNoticias(id, noticias);
}
function deleteNoticias(id) {
    return noticias_repository_1.default.deleteNoticias(id);
}
function addNoticias(noticias) {
    //noticias.contenido = noticias.contenido?.toLowerCase();
    return noticias_repository_1.default.addNoticias(noticias);
}
exports.default = { addNoticias, getNoticias, getNoticiasById, patchNoticias, deleteNoticias };
