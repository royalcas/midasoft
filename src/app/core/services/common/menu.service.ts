import { environment } from './../../../../environments/environment.prod';
import { MenuItem } from './../../models/menu-item.model';
import { MenuItemRaw } from './../../models/menu-item-raw.model';
import { Injectable } from '@angular/core';
import { menuItems } from '../../data/menu-items.raw';
import { map } from 'rxjs/operators';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { menuIconDefinition } from '../../data/menu-icon-definition.cons';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private router: Router) {}
  actualItemId$ = new BehaviorSubject<number>(0);

  setActualItemId(itemId: number) {
    this.actualItemId$.next(itemId);
  }

  getActualItemId() {
    return this.actualItemId$;
  }

  getActualItem() {
    return this.getActualItemId().pipe(
      map(menuItemId => this.getItemById(menuItemId))
    );
  }

  getActualItemUrl() {
    return this.getActualItem().pipe(
      map(menuItem => this.getItemUrl(menuItem))
    );
  }

  getItemUrl(menuItem: MenuItemRaw): string {
    if (!menuItem) {
      return null;
    }
    const urlDelimiter = ('' + menuItem.Link).indexOf('?') > -1 ? '' : '?';
    const nomProc = `&${encodeURIComponent('' + menuItem.ProcessName)}`;
    return `${environment.basePraxedesSiteUrl}${
      menuItem.Link
    }${urlDelimiter}${nomProc}&home=home&theme=1`;
  }

  getMenuItemFromRaw(menuItem: MenuItemRaw): MenuItem {
    return { ...menuItem, children: [] } as MenuItem;
  }

  getAll(): Observable<MenuItemRaw[]> {
    return of(menuItems);
  }

  getMainMenu() {
    return menuItems.filter(this.isRootItem);
  }

  getMenuFromParentId(parentId: number) {
    return menuItems.filter(
      item => !this.isRootItem(item) && item.ParentId === parentId
    );
  }

  getItemById(menuItemId: number) {
    return menuItems.find(item => item.Id === menuItemId);
  }

  isRootItem(menuItem: MenuItemRaw) {
    return !menuItem.ParentId || menuItem.ParentId === menuItem.Id;
  }

  goToItemById(menuItemId: number) {
    if (!menuItemId) {
      this.goHome();
      return;
    }
    this.goToItem(this.getItemById(menuItemId));
  }

  goToItem(menuItem: MenuItemRaw) {
    if (this.getMenuFromParentId(menuItem.Id).length === 0) {
      this.router.navigate(['/vista-clasica', menuItem.Id]);
      return;
    }

    this.router.navigate(['/menu', menuItem.Id]);
  }

  goHome() {
    this.router.navigate(['/menu', 0]);
  }

  getMenuIcon(menuItem: MenuItemRaw): string {
    const ico = menuIconDefinition.find(def => def.id === menuItem.Id);

    if (!ico) {
      return 'gesture';
    }
    return ico.icon;
  }
}
