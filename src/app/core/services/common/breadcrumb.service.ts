import { Observable } from 'rxjs';
import { MenuService } from './menu.service';
import { Injectable } from '@angular/core';
import { MenuItemRaw } from '../../models/menu-item-raw.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  constructor(private menuService: MenuService) {}

  getBreadcrumbs(): Observable<MenuItemRaw[]> {
    return this.menuService
      .getActualItemId()
      .pipe(map(itemId => this.getBreadbrumbsFromItemId(itemId)));
  }

  getBreadbrumbsFromItemId(itemId: number): MenuItemRaw[] {
    if (!itemId) {
      return [];
    }

    const item = this.menuService.getItemById(itemId);

    if (this.menuService.isRootItem(item)) {
      return [item];
    }

    return [...this.getBreadbrumbsFromItemId(item.ParentId), item];
  }
}
