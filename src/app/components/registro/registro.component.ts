import { Component, OnInit } from '@angular/core';

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


}
