"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    const mongoUri = 'mongodb+srv://yamete:pIps2TrmSzEKSHS9@cluster0.tsqq0.mongodb.net/';
    const databaseName = 'backend-Proyecto';
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    };
    return mongoose_1.default.connect(mongoUri + databaseName, options);
}
exports.default = { connect };
