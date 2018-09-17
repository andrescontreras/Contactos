import { Component, OnInit } from '@angular/core';

import { PublicacionService } from '../../services/publicacion.service'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contacto } from '../../clases/contacto';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  
  
  detallePub: Contacto = new Contacto('','','');
  public contactos =[];
  Sector:string;
  SubSector:string;
  NombreContacto:string;
  Empresa:string;
  Cargo:string;

  constructor(private service:PublicacionService) {
    
    
    
   }

  ngOnInit() {
    this.service.restItemsServiceGetRestItems()
    .subscribe(data => this.contactos = data);
    console.log("OnInit");
    
  }
  

  add()
  {
    
   console.log(this.contactos);
    this.service.deleteObject(this.detallePub);
     //this.service.convertObject();

  }

  print()
  {
    console.log(this.contactos);
  }

  obtener(pub)
  {
    console.log("Boton de detalle");
    console.log(pub);
    this.Empresa = pub.empresa;
    this.Cargo = pub.cargo;
    this.Sector = pub.sector;
    this.SubSector = pub.subSector;
    this.NombreContacto = pub.nombreContacto;
  }
}
