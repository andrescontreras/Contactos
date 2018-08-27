import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '../../../../node_modules/@angular/compiler/src/constant_pool';
import { Contacto } from '../../clases/contacto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicacionService } from '../../services/publicacion.service';


@Component({
  selector: 'app-n-publicacion',
  templateUrl: './n-publicacion.component.html',
  styleUrls: ['./n-publicacion.component.css']
})

export class NPublicacionComponent implements OnInit {

  //contacto:Contacto = new Contacto("","","");
  name;
  phoneNumber;
  note;
  
  

  constructor(
    private service: PublicacionService ) {
      
     }


  ngOnInit() {

  }

  submit()
  {
    console.log(this.name);
    console.log(this.phoneNumber);
    console.log(this.note);
    let contacto:Contacto = new Contacto(this.name,this.phoneNumber ,this.note);
    console.log(contacto);
    console.log( this.service.postObject(contacto));
  }

  
}
