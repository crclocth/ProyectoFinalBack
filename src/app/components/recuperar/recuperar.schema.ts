import { Schema, model, Document } from "mongoose"
import {Recuperar} from "../../models/recuperar.model";

const definition: Partial<Record<keyof Recuperar, any>> ={

    email: { type: String, required: true},

};
const schema: Schema<Recuperar> = new Schema(definition);
export default model<Recuperar & Document> ('Recuperar', schema, 'recuperar');
