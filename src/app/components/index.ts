import {Express} from "express";
import admin from "./admin"
import user from './user/index';
import sugerencia from './sugerencia/index';


const components: Express[] = [
    admin, user, sugerencia
];

export default components;