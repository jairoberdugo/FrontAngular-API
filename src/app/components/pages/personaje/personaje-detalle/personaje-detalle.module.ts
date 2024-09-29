import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeDetalleComponent } from './personaje-detalle.component';

const routes: Routes = [
  { path: ':id', component: PersonajeDetalleComponent } // Definición del parámetro 'id'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajeDetalleModule { }