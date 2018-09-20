import { HttpClientModule } from '@angular/common/http';
import { GestionOrganizacionalComponent } from './gestion-organizacional/gestion-organizacional.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { InternalLayoutOutletComponent } from './internal-layout-outlet/internal-layout-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionOrganizacionalComponent,
    InternalLayoutOutletComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
