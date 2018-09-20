import { ActividadService } from './../../core/services/organizacional/actividad.service';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Actividad } from '../../core/models/organizacional/actividad.model';

@Component({
  selector: 'app-activity-dashboard',
  templateUrl: './activity-dashboard.component.html',
  styleUrls: ['./activity-dashboard.component.scss']
})
export class ActivityDashboardComponent implements OnInit {
  faPlusIcon = faPlus;
  displayedColumns: string[] = [
    'Id',
    'CodigoEmpleado',
    'FechaProgramada',
    // 'CentroCosto',
    // 'TipoMovimiento',
    'UsuarioAutoriza',
    'UsuarioRegistro',
    // 'TipoRegistro',
    // 'Horario',
    'Directorio',
    // 'FechaMarcacion',
    // 'Novedad',
    // 'Observacion',
    'Dispositivo'
    // 'Compania',
    // 'Contrato'
  ];
  actividades$: Observable<Actividad[]>;

  constructor(
    private router: Router,
    private actividadService: ActividadService
  ) {}

  ngOnInit() {
    this.actividades$ = this.actividadService.getAll();
  }

  add() {
    this.router.navigate(['/organizacional/crear']);
  }
}
