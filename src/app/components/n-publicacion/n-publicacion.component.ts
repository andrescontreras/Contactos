import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConstantPool } from '../../../../node_modules/@angular/compiler/src/constant_pool';
import { Contacto, T_Contacto } from '../../clases/contacto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicacionService } from '../../services/publicacion.service';
import { Publicacion } from '../../clases/publicacion';

@Component({
  selector: 'app-n-publicacion',
  templateUrl: './n-publicacion.component.html',
  styleUrls: ['./n-publicacion.component.css']
})

export class NPublicacionComponent implements OnInit {

  //contacto:Contacto = new Contacto("","","");
  formasc =  false;
  tcontacto:string = "Seleccione uno";
  contacto:string = "";

  edittcontacto:string = "Seleccione uno";
  editcontacto:string = "";
  editIndex:number = -1;
  @ViewChild('btnClose') btnClose :ElementRef;
  @ViewChild('btnPublicar') btnPublicar :ElementRef;

  Sector:string = "Choose...";
  SubSector:string = "Choose...";
  NombreContacto:string;
  Empresa:string;
  Cargo:string = "Choose...";
  Descripcion: string = "";
  
  lista = [
    new T_Contacto("Teléfono móvil", "5464654"),
    new T_Contacto("Teléfono móvil", "11111"),
    new T_Contacto("Teléfono móvil", "01800042135")
  ];

  sectores: string[] = 
  ["Agricultura, ganadería, caza, silvicultura y pesca",
  "Explotación de minas y canteras",
  "Industrias manufactureras",
  "	Construcción",
  "	Transporte y almacenamiento",
  "	Información y comunicaciones",
  "Financiaro y de seguros",
  "Inmobiliario",
  "Educación",
  "Salud",
  "Entretenimiento"
  ];

  cargos: string[] =
  [
    "Abogado",
    "Administrador",
    "	Analista Central de Presupuesto",
    "Analista de Higiene y Seguridad Industrial",
    "Analista de Presupuesto",
    "Analista Financiero",
    "Arquitecto",
    "Auditor",
    "Comprador",
    "Contabilista",
    "Coordinador",
    "Dibujante",
    "Dietista",
    "Docente",
    "Ecónomo",
    "Especialista Organizacional",
    "Ingeniero de Proyectos",
    "Inspector de Seguridad Industrial e Higiene Ocupacional",
    "	Jefe de Tesorería",
  ]

  constructor(
    private service: PublicacionService ) {
      
     }


  ngOnInit() {

  }

  mostrarFormas()
  {
    this.formasc = !this.formasc;
  }

  editContacto(i)
  {
    console.log("contacto editado ES: ",i);
    console.log( this.lista[i])
    this.editcontacto = this.lista[i].contacto
    this.edittcontacto = this.lista[i].tipo
    this.editIndex = i;
  }

  confirmEdit(){
    this.lista.splice(this.editIndex,1,new T_Contacto(this.edittcontacto, this.editcontacto) );
    this.btnClose.nativeElement.click();
  }

  publicar()
  {
    
    //this.submit();
  }

  deleteContacto(i)
  {
    console.log("contacto eliminado ES: ",i);
    this.lista.splice(i,1)
  }
  addContacto()
  {
    this.lista.push(new T_Contacto(this.tcontacto, this.contacto) );
    this.contacto = "";
    this.tcontacto = "Seleccione uno"
  }

  submit()
  {
    console.log("Entro al submit");
    let pub = new Publicacion(this.Sector, this.SubSector, this.Empresa, this.NombreContacto,this.Descripcion ,this.Cargo);
    this.service.postObject(pub);
    this.btnPublicar.nativeElement.click();
  }

  
}
