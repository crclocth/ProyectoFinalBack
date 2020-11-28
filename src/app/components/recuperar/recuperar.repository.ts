import { Recuperar } from "../../models/recuperar.model";
import recuperarSchema from "./recuperar.schema";

async function getRecuperar(): Promise<Recuperar[]>{
    return recuperarSchema.find(); //mostrar todo
}

async function getRecuperarById(id: string): Promise<Recuperar | null>{
    return recuperarSchema.findOne({ _id: id });
}

async function addRecuperar(user: Recuperar): Promise<Recuperar>{    
    return recuperarSchema.create<Recuperar>(user);
}

async function deleteRecuperar(id: string) {
    return recuperarSchema.remove({ _id: id });
}

async function patchRecuperar(_id: string, user: Partial<Recuperar>): Promise<Partial<Recuperar | null>>{
    return recuperarSchema.findByIdAndUpdate(_id, user);
}

export default { addRecuperar , getRecuperar, getRecuperarById, deleteRecuperar, patchRecuperar};