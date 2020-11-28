import {Express} from "express";
import admin from "./admin"
import user from './user/index';

const components: Express[] = [
    admin, user,
];

export default components;