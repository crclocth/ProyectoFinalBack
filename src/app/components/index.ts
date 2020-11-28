import {Express} from "express";
import admin from "./admin"
import user from './user/index';
import sugerencia from './sugerencia/index';
import recuperar from './recuperar/index';

const components: Express[] = [
    admin, user, sugerencia, recuperar,
];

export default components;