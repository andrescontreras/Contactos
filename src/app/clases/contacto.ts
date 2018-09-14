export class Contacto {
    name: string;
    phoneNumber: string;
    note: string;

    constructor(Name: string, PhoneNumber: string, Note: string) {
        this.name = Name;
        this.phoneNumber = PhoneNumber;
        this.note = Note;
        
    }

}

export class T_Contacto{
    tipo: string;
    contacto: string;
    constructor(tipo: string, contacto: string) {
        this.tipo = tipo;
        this.contacto = contacto;
        
    }
}
export interface Contacto {
    name: string;
    phoneNumber: string;
    note: string;
    // comentario
}