import { Recuperar } from '../../models/recuperar.model';
import recuperarRepository from "./recuperar.repository";


function getRecuperar(): Promise<Recuperar[]>{
    return recuperarRepository.getRecuperar();
}

function getRecuperarById(id: string): Promise<Recuperar | null>{
    return recuperarRepository.getRecuperarById(id);
}

function patchRecuperar(id: string, recuperar: Partial<Recuperar>): Promise<Partial<Recuperar | null>>{
    return recuperarRepository.patchRecuperar(id, recuperar);
}

function deleteRecuperar(id: string) {
    return recuperarRepository.deleteRecuperar(id);
}

function addRecuperar(recuperar: Recuperar): Promise<Recuperar>{

    recuperar.email = recuperar.email?.toLowerCase();
    return recuperarRepository.addRecuperar(recuperar);
}

export default { addRecuperar, getRecuperar, getRecuperarById, patchRecuperar, deleteRecuperar};