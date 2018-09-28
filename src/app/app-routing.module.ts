import { SubmoduleLayoutComponent } from './shared/layout/submodule-layout/submodule-layout.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PageNotFoundComponent } from './shared/error/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { GestionOrganizacionalModule } from './gestion-organizacional/gestion-organizacional.module';
import { InternalLayoutOutletComponent } from './internal-layout-outlet/internal-layout-outlet.component';
import { NominaModule } from './nomina/nomina.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'organizacional',
    loadChildren: () => GestionOrganizacionalModule,
    component: InternalLayoutOutletComponent
  },
  {
    path: 'nomina',
    loadChildren: () => NominaModule,
    component: InternalLayoutOutletComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
