import { Contacto } from "./contacto";

export interface Publicacion {
   id: number;
   sector: string;
   subSector: string;
   empresa: string;
   nombreContacto: string;
   cargo: string;
   formasC: string;
    // comentario
}