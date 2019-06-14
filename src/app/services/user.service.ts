import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  // tslint:disable-next-line:variable-name
  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  // tslint:disable-next-line:variable-name
  register(user: User): Observable<any> {
    // console.log(user);
    // console.log(this.url);
    // tslint:disable-next-line:prefer-const
    let params = JSON.stringify(user);
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // tslint:disable-next-line:object-literal-shorthand
    return this._http.post(this.url + 'register', params, {headers: headers});
  }
}
