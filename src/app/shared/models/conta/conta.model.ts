import { Cliente } from "../usuario";
import { Gerente } from "../usuario";
import { Movimentacao } from "../conta";

export class Conta {

    constructor(
        public id?: number,
        public cliente?: Cliente,
        public numero?: number,
        public saldo?: number,
        public limite?: number,
        public dataCriacao?: Date,
        public gerente?: Gerente,
        public movimentacoes?: Movimentacao[]
    ) {}

}
