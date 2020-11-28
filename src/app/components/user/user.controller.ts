import { User } from "../../models/user.model";
import userRepository from "./user.repository";


function getUser(): Promise<User[]>{
    return userRepository.getUser();
}

function getUserById(id: string): Promise<User | null>{
    return userRepository.getUserById(id);
}

function patchUser(id: string, user: Partial<User>): Promise<Partial<User | null>>{
    return userRepository.patchUser(id, user);
}

function deleteUser(id: string) {
    return userRepository.deleteUser(id);
}

function addUser(user: User): Promise<User>{

    user.nombres = user.nombres?.toUpperCase();
    user.email = user.email?.toLowerCase();
    return userRepository.addUser(user);
}

export default { addUser, getUser, getUserById, patchUser, deleteUser};