import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  submittedData: any[] = [];
  resumeFileName: string = '';
  successMessage: boolean = false; 

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.resumeFileName = event.target.files[0].name;
    }
  }

  onSubmit(form: any) {
    if (form.valid) {
      const newData = {
        name: form.value.name,
        phone: form.value.phone,
        email: form.value.email,
        address: form.value.address,
        qualification: form.value.qualification,
        resume: this.resumeFileName
      };
      this.submittedData.push(newData);
      this.successMessage = true; // Show success message
      setTimeout(() => this.successMessage = false, 3000); 
      form.resetForm();
    }
  }

}
