import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl, FormGroup} from '@angular/forms'

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NPublicacionComponent } from './components/n-publicacion/n-publicacion.component';
import { GarantiaComponent } from './components/garantia/garantia.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent} from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';



 

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    CuentaComponent,
    NavegacionComponent,
    BuscarComponent,
    NPublicacionComponent,
    GarantiaComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
