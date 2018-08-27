import { EmptyError } from "rxjs";

export class Publicacion {
    sector:string;
    empresa:string;
    cargo:string;
    estado:boolean;

    constructor(sector: string, empresa: string, cargo: string, estado: boolean ){
        this.sector =  sector;
        this.empresa = empresa;
        this.cargo = cargo;
        this.estado = estado;
    }

}