export class Endereco {
  constructor(
    public tipo?: string,
    public logradouro?: string,
    public cep?: string,
    public complemento?: string,
    public numero?: string,
    public cidade?: string,
    public estado?: string
  ) {
    this.complemento = ' ';
  }
}
