import { Encuesta3 } from '../../models/encuesta3.model';
import encuesta3Repository from "./encuesta3.repository";


function getEncuesta3(): Promise<Encuesta3[]>{
    return encuesta3Repository.getEncuesta3();
}

function getEncuesta3ById(id: string): Promise<Encuesta3 | null>{
    return encuesta3Repository.getEncuesta3ById(id);
}

function patchEncuesta3(id: string, encuesta3: Partial<Encuesta3>): Promise<Partial<Encuesta3 | null>>{
    return encuesta3Repository.patchEncuesta3(id, encuesta3);
}

function deleteEncuesta3(id: string) {
    return encuesta3Repository.deleteEncuesta3(id);
}

function addEncuesta3(encuesta3: Encuesta3): Promise<Encuesta3>{

    encuesta3.email = encuesta3.email?.toLowerCase();
    return encuesta3Repository.addEncuesta3(encuesta3);
}

export default { addEncuesta3, getEncuesta3, getEncuesta3ById, patchEncuesta3, deleteEncuesta3};