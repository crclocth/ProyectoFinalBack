import { Encuesta3 } from "../../models/encuesta3.model";
import encuesta3Schema from "./encuesta3.schema";

async function getEncuesta3(): Promise<Encuesta3[]>{
    return encuesta3Schema.find(); //mostrar todo
}

async function getEncuesta3ById(id: string): Promise<Encuesta3 | null>{
    return encuesta3Schema.findOne({ _id: id });
}

async function addEncuesta3(user: Encuesta3): Promise<Encuesta3>{    
    return encuesta3Schema.create<Encuesta3>(user);
}

async function deleteEncuesta3(id: string) {
    return encuesta3Schema.remove({ _id: id });
}

async function patchEncuesta3(_id: string, user: Partial<Encuesta3>): Promise<Partial<Encuesta3 | null>>{
    return encuesta3Schema.findByIdAndUpdate(_id, user);
}

export default { addEncuesta3 , getEncuesta3, getEncuesta3ById, deleteEncuesta3, patchEncuesta3};