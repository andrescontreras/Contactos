import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '../../../../node_modules/@angular/compiler/src/constant_pool';
import { Contacto, T_Contacto } from '../../clases/contacto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicacionService } from '../../services/publicacion.service';


@Component({
  selector: 'app-n-publicacion',
  templateUrl: './n-publicacion.component.html',
  styleUrls: ['./n-publicacion.component.css']
})

export class NPublicacionComponent implements OnInit {

  //contacto:Contacto = new Contacto("","","");
  formasc =  false;
  tcontacto:string;
  contacto:string = "";
  
  lista = [
    new T_Contacto("celular", "5464654"),
    new T_Contacto("celular", "11111"),
    new T_Contacto("celular", "1111")
  ];

  constructor(
    private service: PublicacionService ) {
      
     }


  ngOnInit() {

  }

  mostrarFormas()
  {
    this.formasc = !this.formasc;
  }

  addContacto()
  {
    this.lista.push(new T_Contacto(this.tcontacto, this.contacto) );
  }

  submit()
  {
    
  }

  
}
