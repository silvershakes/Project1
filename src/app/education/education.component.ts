import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  externalPageContent: string | undefined;

 constructor(private http: HttpClient) { }

 ngOnInit() {
    this.http.get('./external-page.html', { responseType: 'text' }).subscribe(data => {
      this.externalPageContent = data;
    });
 }

}
