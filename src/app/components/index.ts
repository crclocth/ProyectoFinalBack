import {Express} from "express";
import admin from "./admin"
import user from './user/index';
import sugerencia from './sugerencia/index';
import recuperar from './recuperar/index';
import encuesta1 from './encuesta1/index';
import encuesta2 from './encuesta2/index';
import encuesta3 from './encuesta3/index';
import noticias from './noticias/index';

const components: Express[] = [
    admin, user, sugerencia, recuperar, encuesta1, encuesta2, encuesta3, noticias,
];

export default components;