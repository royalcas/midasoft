import { MidaHttpService } from './../http/mida-http.service';
import { Injectable } from '@angular/core';
import { StorageService } from '../common/storage.service';
import { Observable } from 'rxjs';
import { IUserLogin } from 'src/app/core/models/user-login.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private storage: StorageService, private http: MidaHttpService) {}

  login(userLogin: IUserLogin): Observable<any> {
    return this.http.post<string>('token', userLogin).pipe(
      tap(token => this.setOAuthToken(token))
    );
  }

  getOAuthToken(): Observable<string> {
    return this.storage.getRaw('authentication-token');
  }

  setOAuthToken(token: string) {
    return this.storage.set('authentication-token', token);
  }
}
