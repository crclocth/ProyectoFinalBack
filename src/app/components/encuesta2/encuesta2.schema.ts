import { Schema, model, Document } from "mongoose"
import {Encuesta2} from "../../models/encuesta2.model";

const definition: Partial<Record<keyof Encuesta2, any>> ={

    email: { type: String, required: true},
    mensaje: { type: String, required: true},
};
const schema: Schema<Encuesta2> = new Schema(definition);
export default model<Encuesta2 & Document> ('Encuesta2', schema, 'encuesta2');
