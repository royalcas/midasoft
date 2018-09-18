import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  get<T>(inputName: string): Observable<T> {
    return this.getRaw(inputName).pipe(
      map(value => {
        return JSON.parse(value) as T;
      })
    );
  }

  getRaw(inputName: string): Observable<string> {
    return of(localStorage.getItem(inputName));
  }

  set(inputName, value: any) {
    localStorage.setItem(inputName, value);
  }
}
