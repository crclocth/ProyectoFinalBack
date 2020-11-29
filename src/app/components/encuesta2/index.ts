import express, {Express} from "express";
import router from "./encuesta2.network";

const encuesta2: Express = express();
encuesta2.use('/encuesta2', router );

export default encuesta2;
