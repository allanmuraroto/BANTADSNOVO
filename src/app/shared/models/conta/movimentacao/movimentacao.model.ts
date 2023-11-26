import { Conta } from "../conta.model";
import { TipoMovimentacao } from "./TipoMovimentacao";

export class Movimentacao {

    constructor(
        public id?: number,
        public data?: Date,
        public tipo?: TipoMovimentacao,
        public valor?: number,
        public origem?: Conta,
        public destino?: Conta
    ) {}

}
