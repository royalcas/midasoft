import { ActividadService } from './../../core/services/organizacional/actividad.service';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil, filter, debounceTime } from 'rxjs/operators';
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
  actividades: Actividad[];
  actividadesMostradas: Actividad[];
  destroy$ = new Subject();
  criterio$ = new Subject<string>();

  // Initializar
  // Injection
  constructor(
    private router: Router,
    private actividadService: ActividadService
  ) {}

  // Init
  // Datos External information

  ngOnInit() {
    this.actividadService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (actividades: Actividad[]) => {
          this.actividades = actividades;
          this.actividadesMostradas = actividades;
        },
        error => {
          if (error.statusCode === 401 || error.statusCode === 404) {
            //
            this.router.navigate(['/']);
          }
        }
      );

    this.criterio$
      .pipe(
        filter(criterio => criterio.length >= 3),
        debounceTime(1000)
      )
      .subscribe((criterio: string) => {
        this.actividadesMostradas = this.filtrarActividades(
          this.actividades,
          criterio
        );
      });
  }

  private filtrarActividades(
    fuente: Actividad[],
    criterio: string
  ): Actividad[] {
    const actividadesFiltradas = fuente.filter((actividad: Actividad) => {
      const dispositivo = actividad.Dispositivo || '';
      return dispositivo.toLowerCase().indexOf(criterio) !== -1;
    });

    return actividadesFiltradas;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  add() {
    this.router.navigate(['/organizacional/crear']);
  }

  onFiltrarActividades(criterio: string) {
    // Functional QUE / COMO
    this.criterio$.next(criterio);
  }
}
