import { Endereco } from "./endereco.model";
import { Conta } from "./conta";
export class Usuario {
        public id?: number
        public nome?: string
        public senha?: string
        public email?: string
        public cpf?: string
        public endereco?: Endereco
        public salario?: number
        public nivel?: string | number
        public conta?: Conta
}
