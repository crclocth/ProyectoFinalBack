import { Encuesta1 } from "../../models/encuesta1.model";
import encuesta1Schema from "./encuesta1.schema";

async function getEncuesta1(): Promise<Encuesta1[]>{
    return encuesta1Schema.find(); //mostrar todo
}

async function getEncuesta1ById(id: string): Promise<Encuesta1 | null>{
    return encuesta1Schema.findOne({ _id: id });
}

async function addEncuesta1(user: Encuesta1): Promise<Encuesta1>{    
    return encuesta1Schema.create<Encuesta1>(user);
}

async function deleteEncuesta1(id: string) {
    return encuesta1Schema.remove({ _id: id });
}

async function patchEncuesta1(_id: string, user: Partial<Encuesta1>): Promise<Partial<Encuesta1 | null>>{
    return encuesta1Schema.findByIdAndUpdate(_id, user);
}

export default { addEncuesta1 , getEncuesta1, getEncuesta1ById, deleteEncuesta1, patchEncuesta1};