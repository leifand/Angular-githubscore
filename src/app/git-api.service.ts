import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class GitApiService {
  constructor(private _http: Http) { }

  getUser(username) {
    //console.log('**GitApiService**');
    return this._http.get(`https://api.github.com/users/${username}`).map(data=>data.json()).toPromise();
  }
}
