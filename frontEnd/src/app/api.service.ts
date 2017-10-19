import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  testApi() {
    return this._http.get('/api/test')
    .map(response => response.json())
    .toPromise();
  }

  // Add user to DB
  createUser(user) {
    return this._http.post('/api/user/create', user)
    .map(response => response.json())
    .toPromise();
  }

  getUsers(){
    return this._http.get('/api/user/all')
    .map(response => response.json())
    .toPromise();
  }

  deleteUser(userId) {
    return this._http.get(`/api/user/delete/${userId}`)
    .map(response => response.json())
    .toPromise();
  }

}
