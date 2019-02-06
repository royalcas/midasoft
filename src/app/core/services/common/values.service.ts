import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MidaHttpService } from '../http/mida-http.service';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor(private http: MidaHttpService) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>('Values');
  }
}
