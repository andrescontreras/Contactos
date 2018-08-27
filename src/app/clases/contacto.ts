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

export interface Contacto {
    name: string;
    phoneNumber: string;
    note: string;
    // comentario
}