import { Injectable } from '@angular/core';
import { BaseAPIService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { User } from './models';
import { Observable } from 'rxjs';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseAPIService<User> {
  constructor(http: HttpClient, private sessionService: SessionService ) {
    super(http, 'Users');
  }

  login(model): Observable<any> {
    return this.create(model, this.apiUrl + '/login');
  }

  logout() {
    // http://localhost:3000/api/Users/logout?access_token=zZftGHx6EBHpSfJv5gkNnNMJxhpt3ilAzN2u0RhAxfVeYiNT3PRYUtfoqReslPP5
    return this.get(this.apiUrl + '/logout?' + 'access_token=' + this.sessionService.user.token );
  }

  reset() {
    // /Users/reset
    // api/Users/logout?access_token=zZftGHx6EBHpSfJv5gkNnNMJxhpt3ilAzN2u0RhAxfVeYiNT3PRYUtfoqReslPP5
    return this.get(this.apiUrl + '/reset?' + 'access_token=' + this.sessionService.user.token );
  }

  resetPassword() {
    // /Users/reset-password
    return this.get(this.apiUrl + '/reset-password?' + 'access_token=' + this.sessionService.user.token );
  }
}
