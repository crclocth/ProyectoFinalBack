import { Encuesta2 } from '../../models/encuesta2.model';
import encuesta2Repository from "./encuesta2.repository";


function getEncuesta2(): Promise<Encuesta2[]>{
    return encuesta2Repository.getEncuesta2();
}

function getEncuesta2ById(id: string): Promise<Encuesta2 | null>{
    return encuesta2Repository.getEncuesta2ById(id);
}

function patchEncuesta2(id: string, encuesta2: Partial<Encuesta2>): Promise<Partial<Encuesta2 | null>>{
    return encuesta2Repository.patchEncuesta2(id, encuesta2);
}

function deleteEncuesta2(id: string) {
    return encuesta2Repository.deleteEncuesta2(id);
}

function addEncuesta2(encuesta2: Encuesta2): Promise<Encuesta2>{

    encuesta2.email = encuesta2.email?.toLowerCase();
    return encuesta2Repository.addEncuesta2(encuesta2);
}

export default { addEncuesta2, getEncuesta2, getEncuesta2ById, patchEncuesta2, deleteEncuesta2};