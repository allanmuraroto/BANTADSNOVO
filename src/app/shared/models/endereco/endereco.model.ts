import { Cidade } from "../endereco";
import { Estado } from "../endereco";
import { tipoEndereco } from "../endereco";

export class Endereco {

    constructor(
        public tipo?: tipoEndereco,
        public logradouro?: string,
        public numero?: number,
        public complemento?: string,
        public cep?: string,
        public cidade?: Cidade,
        public estado?: Estado,
        public bairro?: string
    ) {}

}
