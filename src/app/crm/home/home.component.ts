import { Component, OnInit } from '@angular/core';
import { ValuesService } from 'src/app/core/services/common/values.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ValuesService$: any;

  constructor(private valuesService: ValuesService) { }

  ngOnInit() {
    this.ValuesService$ = this.valuesService.getAll();
  }

}
