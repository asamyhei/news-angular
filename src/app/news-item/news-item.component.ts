import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() title: string;
  @Input() link: string;
  @Input() origin: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  
  sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
