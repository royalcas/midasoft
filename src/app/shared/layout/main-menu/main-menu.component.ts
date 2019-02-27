import { MenuService } from './../../../core/services/common/menu.service';
import { Component, OnInit, Input } from '@angular/core';
import { MenuItemRaw } from 'src/app/core/models/menu-item-raw.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  @Input()
  moduleName: string;

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
}
