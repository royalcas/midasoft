import { BasicItem } from './../../../core/models/basic-item.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListModalSelectorModel } from './list-modal-selector-data.model';

@Component({
  selector: 'app-list-modal-selector',
  templateUrl: './list-modal-selector.component.html',
  styleUrls: ['./list-modal-selector.component.scss']
})
export class ListModalSelectorComponent implements OnInit {
  filteredData: BasicItem[];

  constructor(
    public dialogRef: MatDialogRef<ListModalSelectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListModalSelectorModel
  ) {
    this.filteredData = [...data.items];
  }

  ngOnInit() {}

  filter(criteria: string) {
    if (!criteria) {
      this.filteredData = [...this.data.items];
    }
    this.filteredData = this.data.items.filter(
      item =>
        `${item.id}`.indexOf(criteria) > -1 ||
        item.description.toLowerCase().indexOf(criteria.toLocaleLowerCase()) >
          -1
    );
  }

  isSelected(currentItem: BasicItem): boolean {
    return this.data.selectedItems.some(item => item.id === currentItem.id);
  }

  selectAll() {
    this.data.selectedItems = [...this.data.items];
  }

  deselectAll() {
    this.data.selectedItems = [];
  }

  compare(currentItem, nextItem) {
    return currentItem.id === nextItem.id;
  }
}
