import { MenuService } from './../../../core/services/common/menu.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItemRaw } from 'src/app/core/models/menu-item-raw.model';
import { expand } from 'rxjs/operators';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  @Input()
  expanded = false;

  @Output()
  sideNavExpanded = new EventEmitter<boolean>();

  menuItems: MenuItemRaw[];

  constructor(private menu: MenuService) {}

  ngOnInit() {
    this.menuItems = this.menu.getMainMenu();
  }

  goToItem(menuItem: MenuItemRaw) {
    this.menu.goToItem(menuItem);
  }

  getMenuIcon(menuItem: MenuItemRaw) {
    return this.menu.getMenuIcon(menuItem);
  }

  toogleMenu() {
    this.expanded = !this.expanded;
    this.sideNavExpanded.emit(this.expanded);
  }
}
