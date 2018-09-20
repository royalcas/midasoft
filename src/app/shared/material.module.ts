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
  MatTableModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule
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
  MatTableModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: MatModules,
  exports: MatModules
})
export class MaterialModule {}
