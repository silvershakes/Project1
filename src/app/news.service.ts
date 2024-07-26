import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
  private newsItems = [
    { id: 1, title: 'Breaking News', content: 'This is a breaking news article.' },
    { id: 2, title: 'Technology News', content: 'The latest tech news is here.' },
    { id: 3, title: 'Sports News', content: 'Exciting sports news today.' },
    // Add more news items
  ];

  getNewsItems(): any[] {
    return this.newsItems;
  }
}
