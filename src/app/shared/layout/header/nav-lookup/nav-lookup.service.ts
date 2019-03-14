import { BasicItem } from './../../../../core/models/basic-item.model';
import { MenuService } from 'src/app/core/services/common/menu.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItemRaw } from 'src/app/core/models/menu-item-raw.model';

@Injectable({
  providedIn: 'root'
})
export class NavLookupService {
  constructor(private menuService: MenuService) {}

  getLookupItem(menuItem: MenuItemRaw): BasicItem {
    const parent = this.menuService.getItemById(menuItem.ParentId);
    return {
      id: menuItem.Id,
      name: menuItem.Name,
      description: parent.Name
    };
  }

  public filter(value: string): Observable<BasicItem[]> {
    const filterValue = value.toLowerCase();

    return this.menuService.getAll().pipe(
      map(items => {
        return items
          .filter(option => option.Name.toLowerCase().includes(filterValue))
          .slice(0, 20)
          .map(option => this.getLookupItem(option));
      })
    );
  }
}
