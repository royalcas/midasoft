import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedPageComponent } from './unauthorized-page/unauthorized-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UnauthorizedPageComponent, PageNotFoundComponent],
  exports: [UnauthorizedPageComponent, PageNotFoundComponent]
})
export class ErrorModule {}
