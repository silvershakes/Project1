import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl = 'http://localhost:3000/issues';

  constructor(private http: HttpClient) {}

  submitIssue(issue: any): Observable<any> {
    return this.http.post(this.apiUrl, issue);
  }

  getIssues(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
