export interface user {
    usuario: Usuario;
}

export interface Usuario {
    alumno: Alumno[];
    profesor: Alumno[];
}

export interface Alumno {
    nombre: string;
    password: string;
    email: string;
}