import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ErrorModule } from './error/error.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ErrorModule,
    LayoutModule,
    FontAwesomeModule
  ],
  declarations: [],
  exports: [MaterialModule, ErrorModule, LayoutModule, FontAwesomeModule]
})
export class SharedModule {}
