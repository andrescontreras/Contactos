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

  toggleVisibility1(e) {
    this.marked1 = e.target.checked;
  }

  toggleVisibility2(e) {
    this.marked2 = e.target.checked;
  }


}
