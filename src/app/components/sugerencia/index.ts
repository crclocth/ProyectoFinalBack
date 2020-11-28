import express, {Express} from "express";
import router from "./sugerencia.network";

const sugerencia: Express = express();
sugerencia.use('/sugerencia', router );

export default sugerencia;
