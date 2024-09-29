import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeDetalleComponent } from './components/pages/personaje/personaje-detalle/personaje-detalle.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personaje-lista',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'personaje-lista', loadChildren: () => import('./components/pages/personaje/personaje-lista/personaje-lista.module').then(m => m.PersonajeListaModule) },
  { path: 'personaje-detalle/:id', component:PersonajeDetalleComponent },
  { path: 'episodes', loadChildren: () => import('./components/pages/episodes/episodes.module').then(m => m.EpisodesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
