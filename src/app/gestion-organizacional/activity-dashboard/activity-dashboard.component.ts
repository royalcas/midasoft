import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { actividades } from './activity-data';

@Component({
  selector: 'app-activity-dashboard',
  templateUrl: './activity-dashboard.component.html',
  styleUrls: ['./activity-dashboard.component.scss']
})
export class ActivityDashboardComponent implements OnInit {
  faPlusIcon = faPlus;
  displayedColumns: string[] = [
    'id',
    'codigoEmpleado',
    'fechaProgramada',
    'centroCosto'
  ];
  actividades = actividades;

  constructor(private router: Router) {}

  ngOnInit() {}

  add() {
    this.router.navigate(['/organizacional/crear']);
  }
}
