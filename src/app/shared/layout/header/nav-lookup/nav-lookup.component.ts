import { BasicItem } from './../../../../core/models/basic-item.model';
import { MenuService } from './../../../../core/services/common/menu.service';
import { MenuItemRaw } from 'src/app/core/models/menu-item-raw.model';
import { debounceTime, startWith, map, mergeMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { NavLookupService } from './nav-lookup.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-nav-lookup',
  templateUrl: './nav-lookup.component.html',
  styleUrls: ['./nav-lookup.component.scss']
})
export class NavLookupComponent implements OnInit {
  lookupControl = new FormControl();
  options: MenuItemRaw[];
  filteredOptions: Observable<BasicItem[]>;

  constructor(
    private menuService: MenuService,
    private navLookupService: NavLookupService
  ) {}

  ngOnInit() {
    this.filteredOptions = this.lookupControl.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      mergeMap(value => this._filter(value))
    );
  }

  goToOption(event: MatAutocompleteSelectedEvent) {
    this.menuService.goToItemById(+event.option.value.id);
    this.lookupControl.setValue('');
  }

  private _filter(value: string): Observable<BasicItem[]> {
    return this.navLookupService.filter(value);
  }
}
