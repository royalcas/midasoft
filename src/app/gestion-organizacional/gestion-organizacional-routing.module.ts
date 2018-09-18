import { CreateActivityComponent } from './create-activity/create-activity.component';
import { ActivityDashboardComponent } from './activity-dashboard/activity-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ActivityDashboardComponent },
  { path: 'crear', component: CreateActivityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionOrganizacionalRoutingModule {}
