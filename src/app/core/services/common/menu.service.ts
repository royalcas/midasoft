import { MenuItem } from './../../models/menu-item.model';
import { MenuItemRaw } from './../../models/menu-item-raw.model';
import { Injectable } from '@angular/core';
import { menuItems } from '../../data/menu-items.raw';
import { find } from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  actualItemId$ = new BehaviorSubject<number>(0);

  constructor(private router: Router) {}

  setActualItemId(itemId: number) {
    this.actualItemId$.next(itemId);
  }

  getActualItemId() {
    return this.actualItemId$;
  }

  getMenuItemFromRaw(menuItem: MenuItemRaw): MenuItem {
    return { ...menuItem, children: [] } as MenuItem;
  }

  getMainMenu() {
    return menuItems.filter(this.isRootItem);
  }

  getMenuFromParentId(parentId: number) {
    return menuItems.filter(
      item => !this.isRootItem(item) && item.ParentId === parentId
    );
  }

  getItemFromId(menuItemId: number) {
    return menuItems.find(item => item.Id === menuItemId);
  }

  isRootItem(menuItem: MenuItemRaw) {
    return !menuItem.ParentId || menuItem.ParentId === menuItem.Id;
  }

  goToItem(menuItem: MenuItemRaw) {
    this.router.navigate(['/menu', menuItem.Id]);
  }
}
