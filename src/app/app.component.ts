import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {hammerjs} from 'node_modules/hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public response: any[];
  test: any;

  constructor(private http: HttpClient) {
  }
}
export class Appcomponent implements OnInit{
    hammerjs = hammerjs;
    title= 'app';
}
  ngOnInit(): void {
    this.http.get('https://news-parser-app.herokuapp.com/news').subscribe((res: any) => {
      this.response = res.sort((a, b) => a.origin.localeCompare(b.origin));
    });
  }
}
