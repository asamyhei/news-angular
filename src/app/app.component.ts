import {Component, OnInit} from '@angular/core';
import {hammerjs} from 'node_modules/hammerjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hammerjs = hammerjs;
  title = 'app';
  response: any[];

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.http.get('https://news-parser-app.herokuapp.com/news').subscribe((res: any) => {
      this.response = res.sort((a, b) => a.origin.localeCompare(b.origin));
    });
  }
}
