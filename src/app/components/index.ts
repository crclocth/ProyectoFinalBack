import {Express} from "express";
import admin from "./admin"
import user from './user/index';
import sugerencia from './sugerencia/index';
import recuperar from './recuperar/index';
import encuesta1 from './encuesta1/index';

const components: Express[] = [
    admin, user, sugerencia, recuperar, encuesta1
];

export default components;