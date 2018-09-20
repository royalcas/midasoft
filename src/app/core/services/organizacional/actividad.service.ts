import { Injectable } from '@angular/core';
import { MidaHttpService } from '../http/mida-http.service';
import { Actividad } from '../../models/organizacional/actividad.model';
import { Observable } from 'rxjs';
import { ManHour } from '../../models/organizacional/man-hour.model';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  constructor(private http: MidaHttpService) {}

  getAll(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>('ManHour');
  }

  get(id: number): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(`ManHour/${id}`);
  }

  add(manHour: ManHour): Observable<Actividad[]> {
    return this.http.post('ManHour', manHour);
  }
}
