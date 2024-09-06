import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll');  // Scrollen deaktivieren
    } else {
      document.body.classList.remove('no-scroll');  // Scrollen aktivieren
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.classList.remove('no-scroll');  // Scrollen aktivieren
  }
}
