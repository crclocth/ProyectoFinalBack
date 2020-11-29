import { Encuesta2 } from "../../models/encuesta2.model";
import encuesta2Schema from "./encuesta2.schema";

async function getEncuesta2(): Promise<Encuesta2[]>{
    return encuesta2Schema.find(); //mostrar todo
}

async function getEncuesta2ById(id: string): Promise<Encuesta2 | null>{
    return encuesta2Schema.findOne({ _id: id });
}

async function addEncuesta2(user: Encuesta2): Promise<Encuesta2>{    
    return encuesta2Schema.create<Encuesta2>(user);
}

async function deleteEncuesta2(id: string) {
    return encuesta2Schema.remove({ _id: id });
}

async function patchEncuesta2(_id: string, user: Partial<Encuesta2>): Promise<Partial<Encuesta2 | null>>{
    return encuesta2Schema.findByIdAndUpdate(_id, user);
}

export default { addEncuesta2 , getEncuesta2, getEncuesta2ById, deleteEncuesta2, patchEncuesta2};