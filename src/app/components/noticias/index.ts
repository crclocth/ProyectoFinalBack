import express, {Express} from "express";
import router from "./noticias.network";

const noticias: Express = express();
noticias.use('/noticias', router );

export default noticias;
