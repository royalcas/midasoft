import { LongDatePipe } from './../../pipes/datetime/long-date.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent implements OnInit {
  currentDate = new Date();
  pipe: LongDatePipe;
  constructor() {
    this.pipe = new LongDatePipe();
  }

  ngOnInit() {}

  get currentTimeText() {
    return this.pipe.transform(this.currentDate);
  }
}
