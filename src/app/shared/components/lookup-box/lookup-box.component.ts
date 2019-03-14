import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-lookup-box',
  templateUrl: './lookup-box.component.html',
  styleUrls: ['./lookup-box.component.scss']
})
export class LookupBoxComponent implements OnInit {
  @Output() changed = new EventEmitter<string>();

  label = 'Buscar';
  value: string;

  private criteria$ = new Subject<string>();

  constructor() {}

  ngOnInit() {
    this.criteria$.pipe(debounceTime(500)).subscribe(criteria => {
      this.changed.emit(criteria);
    });
  }

  clear() {
    this.value = null;
    this.criteria$.next(null);
  }

  criteriaChanged(event: any) {
    this.criteria$.next(event.target.value);
  }
}
