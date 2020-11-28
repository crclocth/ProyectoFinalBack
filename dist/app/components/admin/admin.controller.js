"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_repository_1 = __importDefault(require("./admin.repository"));
function getAdmin() {
    return admin_repository_1.default.getAdmin();
}
function getAdminById(id) {
    return admin_repository_1.default.getAdminById(id);
}
function patchAdmin(id, admin) {
    return admin_repository_1.default.patchAdmin(id, admin);
}
function deleteAdmin(id) {
    return admin_repository_1.default.deleteAdmin(id);
}
function addAdmin(admin) {
    var _a, _b;
    admin.nombres = (_a = admin.nombres) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    admin.email = (_b = admin.email) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    return admin_repository_1.default.addAdmin(admin);
}
exports.default = { addAdmin, getAdmin, getAdminById, patchAdmin, deleteAdmin };
