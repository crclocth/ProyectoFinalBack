import express, {Express} from "express";
import router from "./recuperar.network";

const recuperar: Express = express();
recuperar.use('/recuperar', router );

export default recuperar;
