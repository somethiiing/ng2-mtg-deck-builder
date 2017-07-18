import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'app';

  constructor( private http: Http) {}

  ngOnInit() {
    this.http.get('./mtgDB.ts')
      .do(data => console.log(data))
      .subscribe();
  }
}
