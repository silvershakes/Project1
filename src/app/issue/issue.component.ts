import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent {
  issues: any[] = []; // Initialize an empty array to store submitted issues

  issue = { // Initialize an empty object to bind form data
    name: '',
    category:'',
    news_issue: '',
    details: '',
    email: '',
    phone: ''
  };

  successMessage: boolean = false; // Flag to show success message

  onSubmit(issueForm: NgForm) {
    this.issues.push({ ...this.issue }); // Push a copy of 'issue' object to 'issues' array
    this.successMessage = true; // Show success message
    setTimeout(() => this.successMessage = false, 3000); // Hide success message after 3 seconds
    issueForm.resetForm(); // Optionally reset the form after submission
  }


}
