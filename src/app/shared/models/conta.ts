export class Conta {
  constructor (
    public id?: number,
    public cpf?: string,
    public motivoRejeicao?: string,
    public limite?: number,
    public saldo?: number,
    public numero?: number,
    public status?: string,
    public dataCriacao? : Date
){}
}
