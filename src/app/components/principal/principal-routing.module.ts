import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'


import { RegistroComponent } from '../registro/registro.component';
import { CuentaComponent } from '../cuenta/cuenta.component';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { BuscarComponent } from '../buscar/buscar.component';
import { NPublicacionComponent } from '../n-publicacion/n-publicacion.component';
import { GarantiaComponent } from '../garantia/garantia.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { PrincipalComponent } from '../principal/principal.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'nueva-publicacion', component: NPublicacionComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'garantia', component: GarantiaComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({ 
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
