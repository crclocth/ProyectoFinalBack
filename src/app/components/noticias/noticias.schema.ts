import { Schema, model, Document } from "mongoose"
import {Noticias} from "../../models/noticias.model";

const definition: Partial<Record<keyof Noticias, any>> ={

    titulo: { type: String, required: true},
    contenido: { type: String, required: true},
};
const schema: Schema<Noticias> = new Schema(definition);
export default model<Noticias & Document> ('Noticias', schema, 'noticias');
