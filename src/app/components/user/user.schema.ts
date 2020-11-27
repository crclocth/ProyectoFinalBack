import { Schema, model, Document } from "mongoose"
import {User} from "../../models/user.model";

const definition: Partial<Record<keyof User, any>> ={

    nombres: { type: String, required: true},
    email: { type: String, required: true},
    contraseña: { type: String, required: true },
    contraseñaRepetida: { type:String, required: true}

};
const schema: Schema<User> = new Schema(definition);
export default model<User & Document> ('User', schema, 'user');
