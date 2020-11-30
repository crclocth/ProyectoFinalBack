import { Noticias } from "../../models/noticias.model";
import noticiasSchema from "./noticias.schema";

async function getNoticias(): Promise<Noticias[]>{
    return noticiasSchema.find(); //mostrar todo
}

async function getNoticiasById(id: string): Promise<Noticias | null>{
    return noticiasSchema.findOne({ _id: id });
}

async function addNoticias(user: Noticias): Promise<Noticias>{    
    return noticiasSchema.create<Noticias>(user);
}

async function deleteNoticias(id: string) {
    return noticiasSchema.remove({ _id: id });
}

async function patchNoticias(_id: string, user: Partial<Noticias>): Promise<Partial<Noticias | null>>{
    return noticiasSchema.findByIdAndUpdate(_id, user);
}

export default { addNoticias , getNoticias, getNoticiasById, deleteNoticias, patchNoticias};