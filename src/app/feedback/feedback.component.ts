import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedback = {
    fullName: '',
    email: '',
    phone: '',
    comment: ''
  };

  feedbackSubmitted: boolean = false;

  submitFeedback() {
    // Handle the form submission logic here (e.g., sending data to a server).
    console.log('Feedback submitted:', this.feedback);
    
    // Set the feedbackSubmitted flag to true to display the message
    this.feedbackSubmitted = true;
    
    // Reset the form fields
    this.feedback = {
      fullName: '',
      email: '',
      phone: '',
      comment: ''
    };
  }

  resetForm() {
    // Reset the form fields
    this.feedback = {
      fullName: '',
      email: '',
      phone: '',
      comment: ''
    };
    
    // Reset the feedbackSubmitted flag
    this.feedbackSubmitted = false;
  }

}
