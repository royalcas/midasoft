import { MidaHttpService } from './../http/mida-http.service';
import { Injectable } from '@angular/core';
import { StorageService } from '../common/storage.service';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/core/models/user-login.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private storage: StorageService, private http: MidaHttpService) {}

  login(userLogin: UserLogin): Observable<any> {
    return this.http.post('token', userLogin).pipe(
      tap(response => {
        this.setOAuthToken(response.token);
      })
    );
  }

  getOAuthToken(): Observable<string> {
    return this.storage.getRaw('authentication-token');
  }

  private setOAuthToken(token: string) {
    return this.storage.set('authentication-token', token);
  }
}
