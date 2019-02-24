import { SharedModule } from './../shared/shared.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { DemoDashboardComponent } from './demo-dashboard/demo-dashboard.component';
import { PlaygroundRoutingModule } from './playground-routing.module';

@NgModule({
  declarations: [MenuComponent, DemoDashboardComponent],
  imports: [CommonModule, PlaygroundRoutingModule, SharedModule, CoreModule]
})
export class PlaygroundModule {}
