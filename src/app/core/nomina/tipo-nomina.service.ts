import { MidaHttpService } from './../services/http/mida-http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoNominaService {
  constructor(private http: MidaHttpService) {}

  crear(tipoNomina: any) {
    return this.http.post('TipoNomina', tipoNomina);
  }

  obtenerTodos() {
    return this.http.get('TipoNomina');
  }
}
