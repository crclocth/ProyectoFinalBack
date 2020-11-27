export interface Admin{

    _id: string;
    createdAt?: Date,
    nombres: string;
    apellidos: string;
    sexo:string;
    telefono: number;
    direccion: string;
    cargo:string;
    email: string;
    rut: string;
    contraseña: string;
    contraseñaRepetida: string;
}