import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { MenuItemRaw } from 'src/app/core/models/menu-item-raw.model';
import { MenuService } from 'src/app/core/services/common/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges {
  @Input() menuItems: MenuItemRaw[];
  @Input() parentId: number;
  @Input() level = 1;

  @Output() select = new EventEmitter<number>();

  readonly maxLevel = 1;

  constructor(private menuService: MenuService) {}

  ngOnChanges() {
    if (!this.parentId) {
      this.menuItems = this.menuService.getMainMenu();
    } else {
      this.menuItems = this.menuService.getMenuFromParentId(this.parentId);
    }
  }

  get levelClass(): string {
    return `menu-level-${this.level}`;
  }

  getChildren(item: MenuItemRaw) {
    return this.menuService.getMenuFromParentId(item.Id);
  }

  selectItem(id: number) {
    this.select.emit(id);
  }
}
