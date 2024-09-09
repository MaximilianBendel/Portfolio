import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formular-section',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formular-section.component.html',
  styleUrl: './formular-section.component.scss'
})
export class FormularSectionComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    agreeTerms: false
  }

  isNameFocused = false;
  isEmailFocused = false;
  isMessageFocused = false;

  mailTest = false;

  post = {
    endPoint: 'https://maximilian-bendel.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  resetArray() {
    this.contactData.name = "";
    this.contactData.email = "";
    this.contactData.message = "";
    this.contactData.agreeTerms = false;
  }

  resetForm(ngForm: any) {
    // Formular- und Fokusstatus zurücksetzen
    ngForm.resetForm({
      name: "",
      email: "",
      message: "",
      agreeTerms: false
    });
  }

  resetFocusStatus() {
    // Fokusstatus zurücksetzen
    this.isNameFocused = false;
    this.isEmailFocused = false;
    this.isMessageFocused = false;
  }
}


