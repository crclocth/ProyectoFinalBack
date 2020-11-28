import { Schema, model, Document } from "mongoose"
import {Sugerencia} from "../../models/sugerencia.model";

const definition: Partial<Record<keyof Sugerencia, any>> ={

    email: { type: String, required: true},
    asunto: { type: String, required: true},
    mensaje: { type: String, required: true},

};
const schema: Schema<Sugerencia> = new Schema(definition);
export default model<Sugerencia & Document> ('Sugerencia', schema, 'sugerencia');
