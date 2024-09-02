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
    message: ""
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    this.contactData.name = "";
    this.contactData.email = "";
    this.contactData.message = "";
    }
  }
  
  isNameFocused = false;
  isEmailFocused = false;
  isMessageFocused = false;

}


