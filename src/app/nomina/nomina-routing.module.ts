import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoNominaFormComponent } from './tipo-nomina-form/tipo-nomina-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'crear', pathMatch: 'full' },
  { path: 'crear', component: TipoNominaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NominaRoutingModule {}
