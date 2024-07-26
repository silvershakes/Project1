import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  feedback = {
    Name: '',
    l_name: '',
    email: '',
    comment: ''
  };

  feedbackSubmitted: boolean = false;

  submitFeedback() {
    // Handle the form submission logic here (e.g., sending data to a server).
    console.log('Form submitted:', this.feedback);
    
    // Set the feedbackSubmitted flag to true to display the message
    this.feedbackSubmitted = true;
    
    // Reset the form fields
    this.feedback = {
      Name: '',
      email: '',
      l_name: '',
      comment: ''
    };
  }

  resetForm() {
    // Reset the form fields
    this.feedback = {
      Name: '',
      email: '',
      l_name: '',
      comment: ''
    };
    
    // Reset the feedbackSubmitted flag
    this.feedbackSubmitted = false;
  }

}
