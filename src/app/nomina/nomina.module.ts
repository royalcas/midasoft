import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoNominaFormComponent } from './tipo-nomina-form/tipo-nomina-form.component';
import { NominaRoutingModule } from './nomina-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [CommonModule, NominaRoutingModule, SharedModule, CoreModule],
  declarations: [TipoNominaFormComponent]
})
export class NominaModule {}
