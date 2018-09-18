import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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
  "Educacion",
  "Salud",
  "Entretenimiento"
  ];

  ubicaciones: string[] =
  [
    "Internacional:",
    "  - Argentina",
    "  - Bolivia",
    "  - Brasil",
    "  - Chile",
    "  - Ecuador",
    "  - Paraguay",
    "  - Perú",
    "  - Uruguay",
    "  - Venezuela",
    "  - México",
    "  - Puerto Rico",
    "  - etc",
    "Nacional: ",
    "  - Amazonas",
    "  - Antioquia",
    "  - Arauca",
    "  - Atlántico",
    "  - Bolívar",
    "  - Boyacá",
    "  - Caldas",
    "  - Casanare",
    "  - Cesar",
    "  - Cundinamarca",
    "  - Huila",
    "  - Meta",
    "  - Nariño",
    "  - etc",
  ];

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


}
