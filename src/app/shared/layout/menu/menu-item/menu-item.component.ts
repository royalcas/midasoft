import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItemRaw } from 'src/app/core/models/menu-item-raw.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItemRaw;
  @Output() select: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  selectItem(menuId: number) {
    this.select.emit(menuId);
  }
}
