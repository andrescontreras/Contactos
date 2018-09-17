import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show: boolean = true;
  public contactos =[];
  constructor(private service:PublicacionService) { }

  ngOnInit() {
    this.service.restItemsServiceGetRestItems()
    .subscribe(data => this.contactos = data);
    console.log("OnInit");
  }

  ban()
  {
    this.show = !this.show;
    
  }
}
