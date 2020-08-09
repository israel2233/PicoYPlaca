import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicoPlacaComponent } from './pico-placa/pico-placa.component';

const routes: Routes = [
  { path: '', redirectTo: 'pico-placa', pathMatch: 'full' },
  {path: 'pico-placa', component: PicoPlacaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
