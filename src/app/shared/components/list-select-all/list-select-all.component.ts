import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-list-select-all',
  templateUrl: './list-select-all.component.html',
  styleUrls: ['./list-select-all.component.scss']
})
export class ListSelectAllComponent implements OnChanges {
  @Input() totalItems: number;
  @Input() selectedItems: number;

  @Output() selectAll = new EventEmitter<void>();
  @Output() deselectAll = new EventEmitter<void>();

  checked = false;
  indeterminate = false;
  constructor() {}

  ngOnChanges() {
    this.checked = this.totalItems === this.selectedItems;
    this.indeterminate = !this.checked && this.selectedItems > 0;
  }

  triggerSelectionChange(event: MatCheckboxChange) {
    if (this.indeterminate) {
      this.selectAll.emit();
      return;
    }

    if (this.checked) {
      this.selectAll.emit();
    } else {
      this.deselectAll.emit();
    }
  }
}
