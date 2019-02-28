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
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatListModule,
  MatPaginator,
  MatPaginatorModule,
  MatSortModule
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
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatListModule,
  MatPaginatorModule,
  MatSortModule
];

@NgModule({
  imports: MatModules,
  exports: MatModules
})
export class MaterialModule {}
