import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
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

  feedbackMessage: string | null = null;
  feedbackClass: string = '';

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.feedbackMessage = 'Ihre Nachricht wurde erfolgreich gesendet!';
            this.feedbackClass = 'success';
            setTimeout(() => this.feedbackMessage = null, 2500);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
            this.feedbackMessage = 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.';
            this.feedbackClass = 'error';
            setTimeout(() => this.feedbackMessage = null, 2500);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.feedbackMessage = 'Die Nachricht konnte nicht gesendet werden.';
      this.feedbackClass = 'error';
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

  @ViewChild('backgroundDiv') backgroundDiv!: ElementRef;
  @ViewChild('formularHeadline') formularHeadline!: ElementRef;
  @ViewChild('formularBox') formularBox!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === this.backgroundDiv.nativeElement) {
            this.backgroundDiv.nativeElement.classList.add('visible');
          }
          if (entry.target === this.formularHeadline.nativeElement) {
            this.formularHeadline.nativeElement.classList.add('visible');
          }
          if (entry.target === this.formularBox.nativeElement) {
            this.formularBox.nativeElement.classList.add('visible');
          }
        } else {
          if (entry.target === this.backgroundDiv.nativeElement) {
            this.backgroundDiv.nativeElement.classList.remove('visible');
          }
          if (entry.target === this.formularHeadline.nativeElement) {
            this.formularHeadline.nativeElement.classList.remove('visible');
          }
          if (entry.target === this.formularBox.nativeElement) {
            this.formularBox.nativeElement.classList.remove('visible');
          }
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this.backgroundDiv.nativeElement);
    observer.observe(this.formularHeadline.nativeElement);
    observer.observe(this.formularBox.nativeElement);
  }
}




