import { centrosCosto } from './ccosto.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {
  ccostos = centrosCosto;
  constructor() {}

  ngOnInit() {}
}
