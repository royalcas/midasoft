import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ErrorModule } from './error/error.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BootstrapModule } from './ngb.module';
import { LongDatePipe } from './pipes/datetime/long-date.pipe';
import { ShortDatePipe } from './pipes/datetime/short-date.pipe';

const pipes = [LongDatePipe, ShortDatePipe];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BootstrapModule,
    ErrorModule,
    LayoutModule,
    FontAwesomeModule
  ],
  declarations: [...pipes],
  exports: [
    MaterialModule,
    BootstrapModule,
    ErrorModule,
    LayoutModule,
    FontAwesomeModule,
    ...pipes
  ]
})
export class SharedModule {}
