import { Injectable } from '@angular/core';
import { HttpOptions } from './http-options.model';
import { StorageService } from '../common/storage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MidaHttpOptionsService {
  constructor(private storage: StorageService) {}

  getHttpRequestOptions(
    originalOptions?: HttpOptions
  ): Observable<HttpOptions> {
    return this.storage.getRaw('authentication-token').pipe(
      map(jwtToken => {
        if (!jwtToken) {
          return originalOptions;
        }

        if (!originalOptions) {
          originalOptions = {};
        }

        const options = { ...originalOptions };

        options.headers = options.headers ? options.headers : new HttpHeaders();
        options.headers = options.headers.append(
          'Authentication',
          `Bearer ${jwtToken}`
        );

        return options;
      })
    );
  }
}
