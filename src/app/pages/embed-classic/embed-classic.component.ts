import { MenuItemRaw } from './../../core/models/menu-item-raw.model';
import { menuItems } from './../../core/data/menu-items.raw';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/common/menu.service';
import { map, tap, takeUntil, filter } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-embed-classic',
  templateUrl: './embed-classic.component.html',
  styleUrls: ['./embed-classic.component.scss']
})
export class EmbedClassicComponent implements OnInit, OnDestroy {
  id$: Observable<number>;
  currentItem: MenuItemRaw;
  destroy$ = new Subject();
  embedUrl$: Observable<SafeUrl>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.setActiveMenuItem(+this.route.snapshot.params.id);
    this.id$ = this.route.params.pipe(
      map(params => +params.id),
      tap(selectedItemId => this.setActiveMenuItem(selectedItemId)),
      takeUntil(this.destroy$)
    );

    this.embedUrl$ = this.menuService
      .getActualItemUrl()

      .pipe(
        filter(url => !!url),
        map(url => this.sanitizer.bypassSecurityTrustResourceUrl(url)),
        takeUntil(this.destroy$)
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  setActiveMenuItem(itemId: number) {
    this.currentItem = this.menuService.getItemById(itemId);
    this.menuService.setActualItemId(itemId);
  }

  goToMenuItem(id: number) {
    if (!id || (this.currentItem && id === this.currentItem.Id)) {
      id = 0;
    }

    this.router.navigate(['/menu', id]);
  }
}
