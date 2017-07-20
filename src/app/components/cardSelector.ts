import { Component, OnInit } from '@angular/core';
import { Api } from '../services';

@Component({
  selector: 'card-selector',
  template: `
    <div *ngFor="let unit of data; let i = index">
      <img src="{{unit.imageUrl}}">
    </div>
  `,
  styles: ['']
})

export class CardSelector implements OnInit {
  // t2Sets = ['BFZ', 'OGW', 'SOI', 'EMN', 'KLD', 'AER', 'AKH', 'HOU', 'W16', 'W17'];
  t2Sets = ['EMN'];
  data: any = [];

  constructor (
    private api: Api
  ) {  }

  ngOnInit() {
    // this.api.getAllCardsBySet('AKH')
    //   .subscribe(data => this.data = data);

    this.api.getMultipleSets(this.t2Sets)
      .subscribe()
  }

}
