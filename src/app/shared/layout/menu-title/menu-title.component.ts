import { MenuService } from './../../../core/services/common/menu.service';
import { MenuItemRaw } from './../../../core/models/menu-item-raw.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.scss']
})
export class MenuTitleComponent implements OnInit {
  @Input() item: MenuItemRaw;
  constructor(private menuService: MenuService) {}

  ngOnInit() {}

  goToMenuItem(id: number) {
    if (!id || (this.item && id === this.item.Id)) {
      id = 0;
    }

    this.menuService.goToItemById(id);
  }
}
