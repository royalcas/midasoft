import { TipoNominaService } from './../../core/nomina/tipo-nomina.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tipo-nomina-form',
  templateUrl: './tipo-nomina-form.component.html',
  styleUrls: ['./tipo-nomina-form.component.scss']
})
export class TipoNominaFormComponent implements OnInit {
  tipoNominaForm = this.fb.group({
    Tipo: [
      '',
      Validators.compose([
        Validators.required,
        Validators.maxLength(2),
        Validators.pattern('[0-9]*')
      ])
    ],
    Descripcion: ['', Validators.required]
  });
  tiposNomina$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private tipoNominaService: TipoNominaService
  ) {}

  ngOnInit() {
    this.obtenerTodos();
  }

  obtenerTodos() {
    this.tiposNomina$ = this.tipoNominaService.obtenerTodos();
  }

  save() {
    this.tipoNominaService.crear(this.tipoNominaForm.value).subscribe(
      () => {
        alert('Tipo Nomina Guardado');
      },
      error => {
        alert('error guardando');
      }
    );
  }
}
