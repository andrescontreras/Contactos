import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NPublicacionComponent } from './components/n-publicacion/n-publicacion.component';
import { GarantiaComponent } from './components/garantia/garantia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'principal', component: PrincipalComponent,
    children:[
      { path: 'home', component: HomeComponent },
      { path: 'cuenta', component: CuentaComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'nueva-publicacion', component: NPublicacionComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: 'garantia', component: GarantiaComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '/principal', pathMatch: 'full' },
    ]
  },
  
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({ 
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
