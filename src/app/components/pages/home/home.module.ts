import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PersonajeModule } from '../personaje/personaje.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [CommonModule, HomeRoutingModule, PersonajeModule],
})
export class HomeModule { }
