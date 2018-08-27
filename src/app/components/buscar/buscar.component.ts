import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../clases/publicaciones';
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

  
  p1 = new Publicacion('sector','empresa','cargo',true);
  p2 = new Publicacion('sector2', 'empresa2', 'cargo2', true);
  p3 = new Publicacion('sector3', 'empresa3', 'cargo3', true);
  p4 = new Publicacion('sector4', 'empresa4', 'cargo4', true);
  publicaciones: Publicacion[] = [this.p1, this.p2, this.p3, this.p4];
  detallePub: Contacto = new Contacto('','','');
  public contactos =[];

  constructor(private service:PublicacionService) {
    console.log(this.publicaciones);
    
    
   }

  ngOnInit() {
    this.service.restItemsServiceGetRestItems()
    .subscribe(data => this.contactos = data);
  }
  

  add()
  {
    
   console.log(this.contactos);
    this.service.deleteObject(this.detallePub);
     //this.service.convertObject();

  }

  obtener(pub)
  {
    console.log("Boton de detalle");
    console.log(pub);
    this.detallePub = pub;
  }
}
