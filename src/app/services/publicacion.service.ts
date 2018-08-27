
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';
import { Contacto } from '../clases/contacto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': 'my-auth-token',
    'Accept': '*/*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PublicacionService{

  restItemsUrl = 'http://afcserver.tk:8081/api/Contact';
  restItems: Observable<Contacto[]>;
  
  constructor(private http: HttpClient) { 
    
  }

  // GET
  /*getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems=> {
          console.log(restItems);
          //console.log(thisrestItems);
        }
      );
      console.log("FIN +++++++++++++++++++++++++++++++++");
      
  }*/
  restItemsServiceGetRestItems(): Observable<Contacto[]>{
    return this.http
      .get<Contacto[]>(this.restItemsUrl);
      //.pipe(map(data => data));
  }
  
  convertObject() {
    console.log("====================================");
    console.log(this.restItems);
    const usersJson: any[] = Array.of(this.restItems);
    console.log(usersJson);
  }

  // POST
  postObject1(contact:Contacto)
  {
    console.log("ENTRO AL POST");
    let answer = this.http.post<Contacto>(this.restItemsUrl,contact,httpOptions);
    console.log(answer);
  }


  postObject(contact: Contacto) {
    console.log("ENTRO AL POST");
    this.http.post(this.restItemsUrl, contact, httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
    return contact;
  }

  deleteObject(contact:Contacto)
  {
    const url = `${this.restItemsUrl}/${contact.name}`;
    console.log(url);
    this.http.delete(url,httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
    return contact;
  }

}


