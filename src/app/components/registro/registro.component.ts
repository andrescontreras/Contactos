import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Preferencia } from '../../clases/preferencia'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }
  name = 'Angular 6';
  marked1 = false;
  marked2 = false;
  theCheckbox1 = false;
  theCheckbox2 = false;

  tamEmp :string = "Escoja...";
  sector: string = "Escoja...";
  pais:string = "Escoja...";
  ciudad:string = "";

  preferencias: Preferencia[] = [
    new Preferencia("Sector","Textil"),
    new Preferencia("Sector", "Salud"),
    new Preferencia("Tamaño empresa", "Mediana empresa")

  ];

  @ViewChild('btnClose') btnClose :ElementRef;

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

  ubicaciones: string[] =
  [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Ecuador",
    "Paraguay",
    "Perú",
    "Uruguay",
    "Venezuela",
    "México",
    "Puerto Rico",
    "etc",
  ];

  cargos: string[] =
  [
    "Abogado",
    "Administrador",
    "Analista Central de Presupuesto",
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

  ngOnInit() {
    
  }

  valor1()
  {
    this.marked1 = true;
    this.marked2 = !this.marked1;
    
  }
  valor2()
  {
    this.marked2 = true;
    this.marked1 = !this.marked2;
    
  }
  toggleVisibility1(e) {
    this.marked1 = e.target.checked;
    this.marked2 = !this.marked1;
    this.theCheckbox2 = false; 
  }

  toggleVisibility2(e) {
    this.marked2 = e.target.checked;
    this.marked1 = !this.marked2;
    this.theCheckbox1 = false; 
  }

  terminar()
  {
    this.btnClose.nativeElement.click();
  }

  addPref(tipo:string)
  {
    if(tipo == "Sector")
    {
      this.preferencias.push(new Preferencia(tipo, this.sector));
    }
    else{
      this.preferencias.push(new Preferencia(tipo, this.tamEmp));
    }

  }

  addPrefUbicacion()
  {
    //var  Preferencia = pais+"-"+ciudad;
    this.preferencias.push(new Preferencia("ubicacion", this.pais+"-"+this.ciudad));
  }

  deletePref(i)
  {
    console.log("contacto eliminado ES: ",i);
    this.preferencias.splice(i,1)
  }

}
