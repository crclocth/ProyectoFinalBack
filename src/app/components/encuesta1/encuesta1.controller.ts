import { Encuesta1 } from '../../models/encuesta1.model';
import encuesta1Repository from "./encuesta1.repository";


function getEncuesta1(): Promise<Encuesta1[]>{
    return encuesta1Repository.getEncuesta1();
}

function getEncuesta1ById(id: string): Promise<Encuesta1 | null>{
    return encuesta1Repository.getEncuesta1ById(id);
}

function patchEncuesta1(id: string, encuesta1: Partial<Encuesta1>): Promise<Partial<Encuesta1 | null>>{
    return encuesta1Repository.patchEncuesta1(id, encuesta1);
}

function deleteEncuesta1(id: string) {
    return encuesta1Repository.deleteEncuesta1(id);
}

function addEncuesta1(encuesta1: Encuesta1): Promise<Encuesta1>{

    encuesta1.email = encuesta1.email?.toLowerCase();
    return encuesta1Repository.addEncuesta1(encuesta1);
}

export default { addEncuesta1, getEncuesta1, getEncuesta1ById, patchEncuesta1, deleteEncuesta1};