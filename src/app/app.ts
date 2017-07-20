import { Component, OnInit } from '@angular/core';
import { Api } from './services';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let unit of data; let i = index">
      {{i}}. {{unit.name}}
    </div>
  `,
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'app';
  data = [];

  constructor( private api: Api) {}

  ngOnInit() {
    this.api.get('/cards', 'set=AKH')
      .subscribe();

    this.api.getAllCardsBySet('AKH')
      .subscribe(data => this.data = data);
  }
}
