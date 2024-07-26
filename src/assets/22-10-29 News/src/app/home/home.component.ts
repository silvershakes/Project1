import { Component, OnInit } from '@angular/core';
import { testArticleThumbnail } from '../models/data';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articlesToDisplay: any;

  constructor() {}

  ngOnInit(): void {
    this.articlesToDisplay = [
      {
        type: 'most-popular',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
          testArticleThumbnail,
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
      {
        type: 'education',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
      {
        type: 'elections',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
      {
        type: 'bollywood',
        articles: [testArticleThumbnail, testArticleThumbnail],
      },
    ];
  }
}
