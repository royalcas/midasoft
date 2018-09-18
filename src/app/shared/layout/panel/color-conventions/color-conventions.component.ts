import { ColorConvention } from './../models/color-convention.model';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ConventionsModalComponent } from './conventions-modal/conventions-modal.component';

@Component({
  selector: 'app-color-conventions',
  templateUrl: './color-conventions.component.html',
  styleUrls: ['./color-conventions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorConventionsComponent implements OnInit {
  @Input()
  conventions: ColorConvention[];
  faColorIcon = faPalette;

  constructor(private dialogRef: MatDialog) {}

  ngOnInit() {}

  openConventionModal() {
    this.dialogRef.open(ConventionsModalComponent, {
      data: this.conventions
    });
  }
}
