import { ColorConvention } from './../../models/color-convention.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-conventions-modal',
  templateUrl: './conventions-modal.component.html',
  styleUrls: ['./conventions-modal.component.scss']
})
export class ConventionsModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public conventions: ColorConvention[]) {}

  ngOnInit() {}
}
