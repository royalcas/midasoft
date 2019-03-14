import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { MenuItemRaw } from '../../models/menu-item-raw.model';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly storageInput = 'favorites-list-db';
  constructor(
    private storageService: StorageService,
    private menuService: MenuService
  ) {}

  getAll(): Observable<MenuItemRaw[]> {
    return this.storageService
      .get<MenuItemRaw[]>(this.storageInput)
      .pipe(map(items => items || []));
  }

  add(item: MenuItemRaw) {
    return this.getAll().pipe(
      switchMap(items => {
        items.push(item);
        return this.storageService.set(this.storageInput, items);
      })
    );
  }

  remove(item) {
    this.getAll().pipe(
      switchMap(items => {
        const favorites = items.filter(element => element.Id !== item.Id);
        return this.storageService.set(this.storageInput, favorites);
      })
    );
  }
}
