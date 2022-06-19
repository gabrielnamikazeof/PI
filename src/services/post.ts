import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// installar os pacotes rxjs e rxjs-compat
import 'rxjs-compat/add/operator/map';


@Injectable()
export class Post {
  server = 'http://localhost/ionic/';

  constructor(public http: HttpClient) {}

  dadosApi(dados: any, api: string) {
    const httpOptions = {
      headers: new HttpHeaders({'content-type' : 'application/json'})
    };

    const url = this.server + api;
    return this.http.post(url, JSON.stringify(dados), httpOptions).map(res => res);
  }
}
