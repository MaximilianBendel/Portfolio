import { Component } from '@angular/core';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  constructor(private translationService: TranslationService) { }

  translations: any;

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
