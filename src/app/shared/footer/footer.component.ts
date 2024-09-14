import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

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

  @ViewChild('backgroundDiv') backgroundDiv!: ElementRef;
  @ViewChild('leftText') leftText!: ElementRef;
  @ViewChild('rightBox') rightBox!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === this.backgroundDiv.nativeElement) {
            this.backgroundDiv.nativeElement.classList.add('visible');
          }
          if (entry.target === this.leftText.nativeElement) {
            this.leftText.nativeElement.classList.add('visible');
          }
          if (entry.target === this.rightBox.nativeElement) {
            this.rightBox.nativeElement.classList.add('visible');
          }
        } else {
          if (entry.target === this.backgroundDiv.nativeElement) {
            this.backgroundDiv.nativeElement.classList.remove('visible');
          }
          if (entry.target === this.leftText.nativeElement) {
            this.leftText.nativeElement.classList.remove('visible');
          }
          if (entry.target === this.rightBox.nativeElement) {
            this.rightBox.nativeElement.classList.remove('visible');
          }
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this.backgroundDiv.nativeElement);
    observer.observe(this.leftText.nativeElement);
    observer.observe(this.rightBox.nativeElement);
  }

}
