import { LogoutComponent } from './auth/logout/logout.component';
import { PageNotFoundComponent } from './shared/error/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrganisationalManagementModule } from './organisational-management/organisational-management.module';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'organizacional',
    loadChildren: () => OrganisationalManagementModule
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
