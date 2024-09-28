import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeDetalleComponent } from './personaje-detalle/personaje-detalle.component';
import { PersonajeListaComponent } from './personaje-lista/personaje-lista.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PersonajeDetalleComponent,
    PersonajeListaComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PersonajeDetalleComponent,
    PersonajeListaComponent
  ]
})
export class PersonajeModule { }
