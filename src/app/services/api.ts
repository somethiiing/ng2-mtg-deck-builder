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
    return results;
  }

  private sortIndividualSetData(arr) {
    let results = {};
    let tempKey = arr[0].set;
    let partialIndex;
    let partialCardsObj = {};
    arr.forEach( elem => {
      if (elem.number[elem.number.length - 1] === 'a' || elem.number[elem.number.length - 1] === 'b') {
        if (partialCardsObj[elem.number.slice(0, elem.number.length - 1)] === undefined) {
          partialIndex = elem.number.slice(0, elem.number.length - 1);
          partialCardsObj[partialIndex] = elem;
        } else if (partialCardsObj[elem.number.slice(0, elem.number.length - 1)].name !== elem.name) {
          let cardA = partialCardsObj[elem.number.slice(0, elem.number.length - 1)];
          let cardName = `${cardA.name} // ${elem.name}`;
          cardA._PARTB = elem;
          results[cardName] = cardA;
        }
      } else {
        results[elem.name] = elem;
      }
    });
    results['_SETKEY'] = tempKey;
    return results;
  }

  private sortMultipleSetData(arr) {
    let results = {};
    arr.forEach( (elem, i) => {
      let tempKey = elem._SETKEY;
      results[tempKey] = elem;
      delete results[tempKey]._SETKEY;
    });
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
      .map(this.getJson)
      .map(this.combineData)
      .map(this.sortIndividualSetData)
  }

  getMultipleSets(arr) {
    let urls = [];
    arr.forEach(elem => {
      urls.push(this.getAllCardsBySet(elem));
    })

    return Observable.forkJoin(urls)
      .map(this.sortMultipleSetData)
      .do(data => console.log(data))
  }


}
