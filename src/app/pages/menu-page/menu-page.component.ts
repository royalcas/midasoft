import { MenuItemRaw } from './../../core/models/menu-item-raw.model';
import { menuItems } from './../../core/data/menu-items.raw';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/core/services/common/menu.service';
import { map, tap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit, OnDestroy {
  id$: Observable<number>;
  currentItem: MenuItemRaw;
  destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.id$ = this.route.params.pipe(
      map(params => +params.id),
      tap(selectedItemId => this.setActiveMenuItem(selectedItemId)),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  setActiveMenuItem(itemId: number) {
    this.currentItem = this.menuService.getItemFromId(itemId);
    this.menuService.setActualItemId(itemId);
  }

  goToMenuItem(id: number) {
    if (!id || (this.currentItem && id === this.currentItem.Id)) {
      id = 0;
    }

    this.router.navigate(['/menu', id]);
  }
}
