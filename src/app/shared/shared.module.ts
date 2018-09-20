import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ErrorModule } from './error/error.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BootstrapModule } from './ngb.module';
import { LongDatePipe } from './pipes/datetime/long-date.pipe';
import { ShortDatePipe } from './pipes/datetime/short-date.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';

const pipes = [LongDatePipe, ShortDatePipe];
const components = [LoadingComponent];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BootstrapModule,
    ErrorModule,
    LayoutModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [...pipes, ...components],
  exports: [
    MaterialModule,
    BootstrapModule,
    ErrorModule,
    LayoutModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ...pipes,
    ...components
  ]
})
export class SharedModule {}
