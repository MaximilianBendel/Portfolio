import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements AfterViewInit, OnDestroy {

  projects: any[] = [];
  @ViewChild('aboutMeBox') aboutMeBox!: ElementRef;
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('headline') headline!: ElementRef;
  @ViewChildren('projectbox') projectBoxes!: QueryList<ElementRef>;

  translations: any = {};
  private observer!: IntersectionObserver;

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.updateTranslations();
    this.translationService.getLanguageChange().subscribe(() => {
      this.updateTranslations(); // Update translations when language changes
      this.resetObserver();      // Reinitialize the IntersectionObserver after language change
    });
  }

  ngAfterViewInit(): void {
    // Wait until the ViewChildren (projectBoxes) are available
    this.setupIntersectionObserver();
    this.projectBoxes.changes.subscribe(() => {
      this.resetObserver(); // Reset observer whenever projectBoxes changes
    });
  }

  setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Optional: remove if not visible
        }
      });
    }, { threshold: 0.25 });

    // Initially observe elements
    this.observeElements();
  }

  observeElements() {
    // Observe all elements if they exist
    if (this.aboutMeBox) this.observer.observe(this.aboutMeBox.nativeElement);
    if (this.wrapper) this.observer.observe(this.wrapper.nativeElement);
    if (this.headline) this.observer.observe(this.headline.nativeElement);

    // Wait for projectBoxes to be initialized
    if (this.projectBoxes) {
      this.projectBoxes.forEach((box) => {
        this.observer.observe(box.nativeElement);
      });
    }
  }

  resetObserver() {
    // Disconnect the observer to stop observing old elements
    if (this.observer) {
      this.observer.disconnect();
    }
    // Re-observe the updated elements
    this.observeElements();
  }

  updateTranslations() {
    this.translations = this.translationService.getTranslations();
    this.projects = this.translations.portfolioSection.projects;
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect(); // Cleanup observer when component is destroyed
    }
  }
}
