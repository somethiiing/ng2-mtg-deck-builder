import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class Api {
  api_url = 'https://api.magicthegathering.io/v1'

  constructor( private http: Http) {  }

  private getJson(arr) {
    return arr.map( elem => {
      return elem.json();
    });
  }

  private combineData(arr) {
    let results = [];
    arr.forEach( elem => {
      results = results.concat(elem.cards);
    });
    console.log(results);
    return results;
  }

  get(path, options) {
    return this.http.get(`${this.api_url}${path}?${options}`)
      .do(data => console.log(data))
  }

  getAllCardsBySet(code) {
    const pageNum = [1, 2, 3, 4, 5];
    let urls = [];
    let url = `${this.api_url}/cards?set=${code}&page=`
    pageNum.forEach( elem => {
      urls.push(this.http.get(url + elem));
    });

    return Observable.forkJoin(urls)
      // .map(data => JSON.parse(data['_body'])
      .map(this.getJson)
      .map(this.combineData)
      .do(data => console.log(data))
  }


}
