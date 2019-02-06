import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CRMRoutingModule } from './crm-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CRMRoutingModule
  ],
  declarations: [HomeComponent]
})
export class CRMModule { }
