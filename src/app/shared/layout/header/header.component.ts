import { MenuItemRaw } from './../../../core/models/menu-item-raw.model';
import { FavoritesService } from './../../../core/services/common/favorites.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  favorites$: Observable<MenuItemRaw[]>;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favorites$ = this.favoritesService.getAll();
  }
}
