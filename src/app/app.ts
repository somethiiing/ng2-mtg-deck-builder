import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng2-slim-loading-bar
      class="loading-bar"
      [color]="'lightblue'"
      [height]="'15px'"
    ></ng2-slim-loading-bar>
    <card-selector></card-selector>
  `,
  styleUrls: ['./app.css']
})
export class App {
  title = 'app';
  constructor() {  }

}
