import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Api } from '../services';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'card-selector',
  template: `
    <div *ngFor="let set of cardDataKeys;">
      <div *ngFor="let card of Object.keys(cardData[set]);">
        <img src="{{cardData[set][card].imageUrl}}">
      </div>
    </div>
  `,
  styles: ['']
})

export class CardSelector implements OnInit {
  @Output() loaderStatus = new EventEmitter();
  t2Sets = ['BFZ', 'OGW', 'SOI', 'EMN', 'KLD', 'AER', 'AKH', 'HOU', 'W16', 'W17'];
  // t2Sets = ['EMN'];
  cardData: any = [];
  cardDataKeys: any = [];
  Object;

  constructor (
    private api: Api,
    private loadingBar: SlimLoadingBarService
  ) {
    this.Object = Object;
  }

  ngOnInit() {
    // this.api.getAllCardsBySet('AKH')
    //   .subscribe(data => this.data = data);
    this.loadingBar.start();
    this.api.getMultipleSets(this.t2Sets)
      .subscribe(data => {
        this.cardData = data;
        this.cardDataKeys = Object.keys(this.cardData);
        this.loadingBar.complete();
        this.loadingBar.height = '0px';
      })
  }

}
