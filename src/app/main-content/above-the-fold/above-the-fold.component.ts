import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  translations: any;

  constructor(private translationService: TranslationService) { }

    ngOnInit() {
      this.updateTranslations();
      this.translationService.getLanguageChange().subscribe(() => {
        this.updateTranslations(); // Update translations when language changes
      });
    }

  updateTranslations() {
    this.translations = this.translationService.getTranslations();
  }
}
