import { Injectable } from '@angular/core';
import { BaseAPIService } from './base.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseAPIService<LoginService> {
  constructor( http: HttpClient) {
    super(http, 'login');
    // this.apiUrl = 'http://www.server.com/api/users';
  }

  login (model) {
    return this.create(model);
  }
}
