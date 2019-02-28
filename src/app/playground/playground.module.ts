import { SharedModule } from './../shared/shared.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { DemoDashboardComponent } from './demo-dashboard/demo-dashboard.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemoIndexComponent } from './demo-index/demo-index.component';

@NgModule({
  declarations: [MenuComponent, DemoDashboardComponent, DemoFormComponent, DemoIndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlaygroundRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class PlaygroundModule {}
