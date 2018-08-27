import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }
  name = 'Angular 6';
  marked = false;
  theCheckbox = false;

  ngOnInit() {
  }

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }


}
