import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatDialogModule,
  MatTableModule
} from '@angular/material';

const MatModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatDialogModule,
  MatTableModule
];

@NgModule({
  imports: MatModules,
  exports: MatModules
})
export class MaterialModule {}
