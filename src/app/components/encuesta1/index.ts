import express, {Express} from "express";
import router from "./encuesta1.network";

const encuesta1: Express = express();
encuesta1.use('/encuesta1', router );

export default encuesta1;
