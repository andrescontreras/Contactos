import { Contacto } from "./contacto";

export interface Publicacion {
   id: number;
   sector: string;
   subSector: string;
   empresa: string;
   nombreContacto: string;
   cargo: string;
   descripcion: string;
   formasC: string;
    // comentario
    
}

export class Publicacion {
    id: number;
    sector: string;
    subSector: string;
    empresa: string;
    nombreContacto: string;
    cargo: string;
    descripcion: string;
    formasC: string;

    constructor(Sector: string, SubSector: string, Empresa: string, NombreContacto: string, Descripcion :string, Cargo: string) {
       this.sector = Sector;
       this.subSector =  SubSector;
       this.empresa = Empresa;
       this.nombreContacto = NombreContacto;
       this.cargo = Cargo;
       this.descripcion =  Descripcion;
       this.formasC= null;
        
    }

}