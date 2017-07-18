import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Api {
  api_url = 'https://api.magicthegathering.io/v1'

  constructor( private http: Http) {  }

  get(path, options) {
    this.http.get(`${this.api_url}${path}?${options}`)
      .do(data => console.log(data))
  }
}
