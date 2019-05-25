import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';

const routes: Routes = [
  {
    path: '',
    component: BuscaCepComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
