import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;
  errorFlags: { [key: string]: boolean } = {
    name: false,
    email: false,
    subject: false,
    message: false,
    phone: false
  };
  showSuccessMessage: boolean = false;
nameError: any;
emailError: any;
subjectError: any;
messageError: any;
phoneError: any;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      phone: ['', [Validators.pattern('[0-9]{10}')]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Handle form submission
      console.log('Form submitted successfully!');
      
      // Display success message
      this.showSuccessMessage = true;
      
      // Clear the form and reset error flags
      this.clearForm();
    } else {
      // Handle validation and set error flags
      this.validateAndSetErrors();
    }
  }

  clearForm() {
    this.contactForm.reset();
    this.resetErrorFlags();
  }

  validateAndSetErrors() {
    const controls = this.contactForm.controls;
    Object.keys(controls).forEach((controlName) => {
      const control = controls[controlName];
      if (control.invalid) {
        this.errorFlags[controlName] = true;
      } else {
        this.errorFlags[controlName] = false;
      }
    });
  }

  resetErrorFlags() {
    for (const controlName in this.errorFlags) {
      if (this.errorFlags.hasOwnProperty(controlName)) {
        this.errorFlags[controlName] = false;
      }
    }
  }
  


}
