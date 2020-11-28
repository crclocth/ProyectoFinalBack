import { Sugerencia } from '../../models/sugerencia.model';
import sugerenciaRepository from "./sugerencia.repository";


function getSugerencia(): Promise<Sugerencia[]>{
    return sugerenciaRepository.getSugerencia();
}

function getSugerenciaById(id: string): Promise<Sugerencia | null>{
    return sugerenciaRepository.getSugerenciaById(id);
}

function patchSugerencia(id: string, sugerencia: Partial<Sugerencia>): Promise<Partial<Sugerencia | null>>{
    return sugerenciaRepository.patchSugerencia(id, sugerencia);
}

function deleteSugerencia(id: string) {
    return sugerenciaRepository.deleteSugerencia(id);
}

function addSugerencia(sugerencia: Sugerencia): Promise<Sugerencia>{

    sugerencia.nombres = sugerencia.nombres?.toUpperCase();
    sugerencia.email = sugerencia.email?.toLowerCase();
    return sugerenciaRepository.addSugerencia(sugerencia);
}

export default { addSugerencia, getSugerencia, getSugerenciaById, patchSugerencia, deleteSugerencia};