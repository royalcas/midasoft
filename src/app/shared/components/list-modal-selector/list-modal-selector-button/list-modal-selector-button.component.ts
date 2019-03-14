import { BasicItem } from './../../../../core/models/basic-item.model';
import { ListModalSelectorModel } from './../list-modal-selector-data.model';
import { ListModalSelectorComponent } from './../list-modal-selector.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-list-modal-selector-button',
  templateUrl: './list-modal-selector-button.component.html',
  styleUrls: ['./list-modal-selector-button.component.scss']
})
export class ListModalSelectorButtonComponent implements OnInit {
  @Input() items: BasicItem[];
  @Input() columns: boolean;
  @Input() title = 'Selección de Elementos';
  @Input() selectLabel = 'Seleccionar';
  @Input() selectedLabel = 'Elementos seleccionados';
  @Input() selectingLabel = 'Seleccionando';
  @Input() emptyLabel = 'Sin elementos';
  @Output() selected = new EventEmitter<BasicItem[]>();

  selecting = false;
  selectedItems: BasicItem[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  showSelectionModal() {
    const data: ListModalSelectorModel = {
      title: this.title,
      items: this.items,
      selectedItems: this.selectedItems,
      columns: this.columns
    };

    this.selecting = true;
    const dialogRef = this.dialog.open(ListModalSelectorComponent, {
      data
    });

    dialogRef.afterClosed().subscribe((selected: BasicItem[]) => {
      this.selecting = false;
      if (selected) {
        this.selectedItems = selected;
        this.selected.emit(selected);
      }
    });
  }
}
