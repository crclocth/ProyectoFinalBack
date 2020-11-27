import { Schema, model, Document } from "mongoose"
import {Admin} from "../../models/admin.model";

const definition: Partial<Record<keyof Admin, any>> ={

    nombres: { type: String, required: true},
    email: { type: String, required: true},
    contraseña: { type: String, required: true },
    contraseñaRepetida: { type:String, required: true}

};
const schema: Schema<Admin> = new Schema(definition);
export default model<Admin & Document> ('Admin', schema, 'admin');
