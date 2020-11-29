import { Schema, model, Document } from "mongoose"
import {Encuesta1} from "../../models/encuesta1.model";

const definition: Partial<Record<keyof Encuesta1, any>> ={

    email: { type: String, required: true},
    mensaje: { type: String, required: true},
};
const schema: Schema<Encuesta1> = new Schema(definition);
export default model<Encuesta1 & Document> ('Encuesta1', schema, 'encuesta1');
