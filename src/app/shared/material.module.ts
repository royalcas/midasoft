import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

const MatModules = [MatButtonModule, MatCardModule];

@NgModule({
  imports: MatModules,
  exports: MatModules
})
export class MaterialModule {}
