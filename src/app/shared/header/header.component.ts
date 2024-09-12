import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;

  translations: any = {};

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.updateTranslations();
    this.translationService.getLanguageChange().subscribe(() => {
      this.updateTranslations();
    });
  }
  
  updateTranslations() {
    this.translations = this.translationService.getTranslations();
  }

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

  changeLanguage(lang: 'en' | 'de'): void {
    this.translationService.setLanguage(lang);
  }
}
