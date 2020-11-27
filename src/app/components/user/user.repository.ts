import { User} from "../../models/user.model";
import userSchema from "./user.schema";

async function getUser(): Promise<User[]>{
    return userSchema.find(); //mostrar todo
}

async function getUserById(id: string): Promise<User | null>{
    return userSchema.findOne({ _id: id });
}

async function addUser(admin: User): Promise<User>{    
    return userSchema.create<User>(admin);
}

async function deleteUser(id: string) {
    return userSchema.remove({ _id: id });
}

async function patchUser(_id: string, user: Partial<User>): Promise<Partial<User | null>>{
    return userSchema.findByIdAndUpdate(_id, user);
}

export default { addUser , getUser, getUserById, deleteUser, patchUser};