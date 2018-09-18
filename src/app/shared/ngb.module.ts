NgbModule;
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const NgbModules = [NgbModule];

@NgModule({
  imports: NgbModules,
  exports: NgbModules
})
export class BootstrapModule {}
