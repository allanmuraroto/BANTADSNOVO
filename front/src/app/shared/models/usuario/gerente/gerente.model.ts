import { Usuario } from "../usuario";

export class Gerente implements Usuario {
    id?: number;
    nome?: string;
    email?: string;
    cpf?: string;
    telefone?: string;
    perfil?: string;

    constructor(id?: number, nome?: string, email?: string, cpf?: string, 
        telefone?: string) {
            this.id = id;
            this.nome = nome;
            this.email = email;
            this.cpf = cpf;
            this.telefone = telefone;
            this.perfil = "gerente";
    }

}
