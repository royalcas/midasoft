import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { GestionOrganizacionalComponent } from './gestion-organizacional.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionOrganizacionalRoutingModule } from './gestion-organizacional-routing.module';
import { ActivityDashboardComponent } from './activity-dashboard/activity-dashboard.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    GestionOrganizacionalRoutingModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    ActivityDashboardComponent,
    CreateActivityComponent,
    ActivityFormComponent,
    FormComponent
  ],
  exports: []
})
export class GestionOrganizacionalModule {}
