import { EmbedClassicComponent } from './pages/embed-classic/embed-classic.component';
import { PlaygroundModule } from './playground/playground.module';
import { SubmoduleLayoutComponent } from './shared/layout/submodule-layout/submodule-layout.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PageNotFoundComponent } from './shared/error/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { GestionOrganizacionalModule } from './gestion-organizacional/gestion-organizacional.module';
import { InternalLayoutOutletComponent } from './internal-layout-outlet/internal-layout-outlet.component';
import { NominaModule } from './nomina/nomina.module';
import { CRMModule } from './crm/crm.module';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'menu/:id', component: MenuPageComponent },
  { path: 'vista-clasica/:id', component: EmbedClassicComponent },
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
  {
    path: 'crm',
    loadChildren: () => CRMModule,
    component: InternalLayoutOutletComponent
  },
  {
    path: 'playground',
    loadChildren: () => PlaygroundModule,
    component: InternalLayoutOutletComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
