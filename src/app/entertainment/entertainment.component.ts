import { Component } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {
  bollywoodNews = [
    { title: 'Movie 1', description: 'Description 1', image: 'path/to/image1.jpg' },
    { title: 'Movie 2', description: 'Description 2', image: 'path/to/image2.jpg' },
    // Add more news items
  ];

  tollywoodNews = [
    { title: 'Movie 1', description: 'Description 1', image: 'path/to/image1.jpg' },
    { title: 'Movie 2', description: 'Description 2', image: 'path/to/image2.jpg' },
    // Tollywood news items
  ];

  singersNews = [
    { title: 'Movie 1', description: 'Description 1', image: 'path/to/image1.jpg' },
    { title: 'Movie 2', description: 'Description 2', image: 'path/to/image2.jpg' },
    // Singers news items
  ];

}
