import { Noticias } from '../../models/noticias.model';
import noticiasRepository from "./noticias.repository";


function getNoticias(): Promise<Noticias[]>{
    return noticiasRepository.getNoticias();
}

function getNoticiasById(id: string): Promise<Noticias | null>{
    return noticiasRepository.getNoticiasById(id);
}

function patchNoticias(id: string, noticias: Partial<Noticias>): Promise<Partial<Noticias | null>>{
    return noticiasRepository.patchNoticias(id, noticias);
}

function deleteNoticias(id: string) {
    return noticiasRepository.deleteNoticias(id);
}

function addNoticias(noticias: Noticias): Promise<Noticias>{

    //noticias.contenido = noticias.contenido?.toLowerCase();
    return noticiasRepository.addNoticias(noticias);
}

export default { addNoticias, getNoticias, getNoticiasById, patchNoticias, deleteNoticias};