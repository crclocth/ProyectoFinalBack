import { Admin } from "../../models/admin.model";
import adminRepository from "./admin.repository";


function getAdmin(): Promise<Admin[]>{
    return adminRepository.getAdmin();
}

function getAdminById(id: string): Promise<Admin | null>{
    return adminRepository.getAdminById(id);
}

function patchAdmin(id: string, admin: Partial<Admin>): Promise<Partial<Admin | null>>{
    return adminRepository.patchAdmin(id, admin);
}

function deleteAdmin(id: string) {
    return adminRepository.deleteAdmin(id);
}

function addAdmin(admin: Admin): Promise<Admin>{

    admin.nombres = admin.nombres?.toUpperCase();
    admin.email = admin.email?.toLowerCase();
    return adminRepository.addAdmin(admin);
}

export default { addAdmin, getAdmin, getAdminById, patchAdmin, deleteAdmin};