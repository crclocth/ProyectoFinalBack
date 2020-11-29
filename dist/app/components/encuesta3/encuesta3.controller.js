"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encuesta3_repository_1 = __importDefault(require("./encuesta3.repository"));
function getEncuesta3() {
    return encuesta3_repository_1.default.getEncuesta3();
}
function getEncuesta3ById(id) {
    return encuesta3_repository_1.default.getEncuesta3ById(id);
}
function patchEncuesta3(id, encuesta3) {
    return encuesta3_repository_1.default.patchEncuesta3(id, encuesta3);
}
function deleteEncuesta3(id) {
    return encuesta3_repository_1.default.deleteEncuesta3(id);
}
function addEncuesta3(encuesta3) {
    var _a;
    encuesta3.email = (_a = encuesta3.email) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    return encuesta3_repository_1.default.addEncuesta3(encuesta3);
}
exports.default = { addEncuesta3, getEncuesta3, getEncuesta3ById, patchEncuesta3, deleteEncuesta3 };
