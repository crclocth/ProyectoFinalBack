"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("./user.repository"));
function getUser() {
    return user_repository_1.default.getUser();
}
function getUserById(id) {
    return user_repository_1.default.getUserById(id);
}
function patchUser(id, user) {
    return user_repository_1.default.patchUser(id, user);
}
function deleteUser(id) {
    return user_repository_1.default.deleteUser(id);
}
function addUser(user) {
    var _a, _b;
    user.nombres = (_a = user.nombres) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    user.email = (_b = user.email) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    return user_repository_1.default.addUser(user);
}
exports.default = { addUser, getUser, getUserById, patchUser, deleteUser };
