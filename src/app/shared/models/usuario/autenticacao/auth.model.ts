import { Usuario } from "../usuario";

export class Auth {

    constructor(
        public id?: number,
        public login?: string,
        public senha?: string,
        public perfil?: string
    ){}

}
