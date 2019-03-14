import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CRMRoutingModule } from './crm-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CRMRoutingModule
  ],
  declarations: [HomeComponent]
})
export class CRMModule { }
