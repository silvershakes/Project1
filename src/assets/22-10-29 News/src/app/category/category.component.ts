import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { testArticleThumbnail } from '../models/data';
import { ArticleThumbnail } from '../models/models';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  articles: ArticleThumbnail[] = [];
  @Input() category: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.params['category'];
    this.populateArticleThumbnails();
    this.router.events.subscribe((res: any) => {
      if (res instanceof ActivationEnd) {
        this.category = res.snapshot.params['category'];
        this.populateArticleThumbnails();
      }
    });
  }

  populateArticleThumbnails() {
    this.articles = [
      testArticleThumbnail,
      testArticleThumbnail,
      testArticleThumbnail,
      testArticleThumbnail,
      testArticleThumbnail,
    ];
  }
}
