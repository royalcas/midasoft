import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActividadService } from './../../core/services/organizacional/actividad.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  manHourForm = this.fb.group({
    Empleado: ['', Validators.required],
    FechaMarcacion: ['', Validators.required],
    Dispositivo: ['', Validators.required]
  });

  today = new Date();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private actividadService: ActividadService
  ) {}

  ngOnInit() {}

  save() {
    this.actividadService.add(this.manHourForm.value).subscribe(() => {
      this.router.navigate(['/organizacional']);
    });
  }
}
