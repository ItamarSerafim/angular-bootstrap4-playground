import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

/*
CRUD:
Create: POST: create
Read: GET: getOne(byId), getAll
Update: PUT, PATCH: update(one), update(many)
Delete: DELETE: delete



*/
export class BaseAPIService<T> {
  protected baseApi = environment.apiUrl;
  apiUrl = '';
  constructor (
    protected http: HttpClient,
    protected api = ''
    /*TODO: Later on we're gonna have inject sessionService */
  ) {
    this.apiUrl = this.baseApi + api;
  }

  public create(body , apiUrl = this.apiUrl): Observable<T> {
    return this.http.post<T>(apiUrl, body);
  }

  public get(url: string, options = {}) {
    return this.http.get(url, options);
  }

}
