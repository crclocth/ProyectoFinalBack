import { Schema, model, Document } from "mongoose"
import {Encuesta3} from "../../models/encuesta3.model";

const definition: Partial<Record<keyof Encuesta3, any>> ={

    email: { type: String, required: true},
    mensaje: { type: String, required: true},
};
const schema: Schema<Encuesta3> = new Schema(definition);
export default model<Encuesta3 & Document> ('Encuesta3', schema, 'encuesta3');
