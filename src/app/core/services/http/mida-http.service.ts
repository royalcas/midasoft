import { MidaHttpOptionsService } from './mida-http-options.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { HttpOptions } from './http-options.model';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MidaHttpService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private httpOptionsService: MidaHttpOptionsService
  ) {}

  get<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.httpOptionsService.getHttpRequestOptions(options).pipe(
      switchMap(securedOptions =>
        this.httpClient.get<T>(this.getEndpointUrl(url), securedOptions as any)
      ),
      map((httpEvent: any) => httpEvent),
      catchError(this.handleError)
    );
  }

  private handleError(error) {
    if (error.statusCode === 401 || error.statusCode === 404) {
      //
      this.router.navigate(['/login']);
    }
    return Observable.throw(error);
  }

  post<T>(url: string, body, options?: HttpOptions): Observable<T> {
    return this.httpOptionsService.getHttpRequestOptions(options).pipe(
      switchMap(securedOptions =>
        this.httpClient.post<T>(
          this.getEndpointUrl(url),
          body,
          securedOptions as any
        )
      ),
      map((httpEvent: any) => httpEvent),
      catchError(this.handleError)
    );
  }

  put<T>(url, body, options?: HttpOptions): Observable<T> {
    return this.httpOptionsService.getHttpRequestOptions(options).pipe(
      switchMap(securedOptions =>
        this.httpClient.put<T>(
          this.getEndpointUrl(url),
          body,
          securedOptions as any
        )
      ),
      map((httpEvent: any) => httpEvent),
      catchError(this.handleError)
    );
  }

  delete<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.httpOptionsService.getHttpRequestOptions(options).pipe(
      switchMap(securedOptions =>
        this.httpClient.delete<T>(
          this.getEndpointUrl(url),
          securedOptions as any
        )
      ),
      map((httpEvent: any) => httpEvent),
      catchError(this.handleError)
    );
  }

  private getEndpointUrl(relativePath: string) {
    return `${this.baseApiUrl}${relativePath}`;
  }
}
