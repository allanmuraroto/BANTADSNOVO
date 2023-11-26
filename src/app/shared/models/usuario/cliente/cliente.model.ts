import { Endereco } from "../../endereco";
import { Usuario } from "../usuario";

export class Cliente implements Usuario {
    id?: number;
    nome?: string;
    email?: string;
    cpf?: string;
    telefone?: string;
    perfil?: string;

    constructor(id?: number, nome?: string, email?: string, cpf?: string, 
        telefone?: string, public salario?: number, public endereco?: Endereco) {
            this.id = id;
            this.nome = nome;
            this.email = email;
            this.cpf = cpf;
            this.telefone = telefone;
            this.perfil = "cliente";
    }

}
