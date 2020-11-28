import { Sugerencia } from "../../models/sugerencia.model";
import sugerenciaSchema from "./sugerencia.schema";

async function getSugerencia(): Promise<Sugerencia[]>{
    return sugerenciaSchema.find(); //mostrar todo
}

async function getSugerenciaById(id: string): Promise<Sugerencia | null>{
    return sugerenciaSchema.findOne({ _id: id });
}

async function addSugerencia(user: Sugerencia): Promise<Sugerencia>{    
    return sugerenciaSchema.create<Sugerencia>(user);
}

async function deleteSugerencia(id: string) {
    return sugerenciaSchema.remove({ _id: id });
}

async function patchSugerencia(_id: string, user: Partial<Sugerencia>): Promise<Partial<Sugerencia | null>>{
    return sugerenciaSchema.findByIdAndUpdate(_id, user);
}

export default { addSugerencia , getSugerencia, getSugerenciaById, deleteSugerencia, patchSugerencia};