import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personaje-lista',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'personaje-lista', loadChildren: () => import('./components/pages/personaje/personaje-lista/personaje-lista.module').then(m => m.PersonajeListaModule) },
  { path: 'personaje-detalle/:id', loadChildren: () => import('./components/pages/personaje/personaje-detalle/personaje-detalle.module').then(m => m.PersonajeDetalleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
