import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formular-section',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formular-section.component.html',
  styleUrl: './formular-section.component.scss'
})
export class FormularSectionComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
    agreeTerms: false
  }

  isNameFocused = false;
  isEmailFocused = false;
  isMessageFocused = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid) {
      console.log(this.contactData);
      this.resetArray();
      this.resetForm(ngForm);
      this.resetFocusStatus();
    } else {
      if (!this.contactData.agreeTerms) {
        ngForm.controls['agreeTerms'].markAsTouched();
      }
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


