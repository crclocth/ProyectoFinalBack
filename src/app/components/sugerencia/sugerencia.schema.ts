import { Schema, model, Document } from "mongoose"
import {Sugerencia} from "../../models/sugerencia.model";

const definition: Partial<Record<keyof Sugerencia, any>> ={

    nombres: { type: String, required: true},
    email: { type: String, required: true},
    contraseña: { type: String, required: true },
    contraseñaRepetida: { type:String, required: true}

};
const schema: Schema<Sugerencia> = new Schema(definition);
export default model<Sugerencia & Document> ('Sugerencia', schema, 'sugerencia');
