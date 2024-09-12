import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslationService } from '../../shared/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit, AfterViewInit {

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
    

  
  @ViewChild('aboutMeBox') aboutMeBox!: ElementRef; 
  @ViewChild('aboutMeSection') aboutMeSection!: ElementRef;  
  @ViewChild('aboutMeSectionHeader') aboutMeSectionHeader!: ElementRef;  
  @ViewChild('backgroundDiv') backgroundDiv!: ElementRef;  // Für die gesamte background-div

  ngAfterViewInit(): void {
    // Observer für den aboutMeSectionHeader (Überschrift von links nach rechts) und aboutMeBox (Box von rechts nach links)
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === this.aboutMeSection.nativeElement) {
            this.aboutMeSection.nativeElement.classList.add('visible');
          }
          if (entry.target === this.aboutMeSectionHeader.nativeElement) {
            this.aboutMeSectionHeader.nativeElement.classList.add('visible');
          }
          if (entry.target === this.backgroundDiv.nativeElement) {
            this.backgroundDiv.nativeElement.classList.add('visible');
          }
          if (entry.target === this.aboutMeBox.nativeElement) {
            this.aboutMeBox.nativeElement.classList.add('visible');
          }
        } else {
          if (entry.target === this.aboutMeSection.nativeElement) {
            this.aboutMeSection.nativeElement.classList.remove('visible');
          }
          if (entry.target === this.aboutMeSectionHeader.nativeElement) {
            this.aboutMeSectionHeader.nativeElement.classList.remove('visible');
          }
          if (entry.target === this.backgroundDiv.nativeElement) {
            this.backgroundDiv.nativeElement.classList.remove('visible');
          }
        }
      });
    }, { threshold: 0.3 });

    // Beobachte die entsprechenden Elemente mit dem Observer
    sectionObserver.observe(this.aboutMeBox.nativeElement);
    sectionObserver.observe(this.aboutMeSection.nativeElement);
    sectionObserver.observe(this.aboutMeSectionHeader.nativeElement);
    sectionObserver.observe(this.backgroundDiv.nativeElement);
  }
}

