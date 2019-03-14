import { MenuService } from 'src/app/core/services/common/menu.service';
import { BreadcrumbService } from './../../../core/services/common/breadcrumb.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItemRaw } from 'src/app/core/models/menu-item-raw.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs$: Observable<MenuItemRaw[]>;

  constructor(
    private breadcrumbsService: BreadcrumbService,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.breadcrumbs$ = this.breadcrumbsService.getBreadcrumbs();
  }

  goHome() {
    this.menuService.goHome();
  }

  goToItem(item: MenuItemRaw) {
    this.menuService.goToItem(item);
  }
}
