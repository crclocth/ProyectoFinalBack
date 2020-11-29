import express, {Express} from "express";
import router from "./encuesta3.network";

const encuesta3: Express = express();
encuesta3.use('/encuesta3', router );

export default encuesta3;
