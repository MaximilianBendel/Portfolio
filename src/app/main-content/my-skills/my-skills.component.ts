import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslationService } from '../../shared/translation.service';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  img: string;
}

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements AfterViewInit {

  skillsList: Skill[] = [
    {
      name: "Angular",
      img: "assets/images/images_my_skills/angular-logo.png"
    },
    {
      name: "TypeScript",
      img: "assets/images/images_my_skills/typescript-logo.png"
    },
    {
      name: "JavaScript",
      img: "assets/images/images_my_skills/javascript-logo.png"
    },
    {
      name: "HTML",
      img: "assets/images/images_my_skills/html-logo.png"
    },
    {
      name: "CSS",
      img: "assets/images/images_my_skills/css-logo.png"
    },
    {
      name: "Firebase",
      img: "assets/images/images_my_skills/firebase-logo.png"
    },
    {
      name: "Git",
      img: "assets/images/images_my_skills/git-logo.png"
    },
    {
      name: "Scrum",
      img: "assets/images/images_my_skills/scrum-logo.png"
    },
    {
      name: "Rest-API",
      img: "assets/images/images_my_skills/rest-api-logo.png"
    },
    {
      name: "Material Design",
      img: "assets/images/images_my_skills/material-design-logo.png"
    }
  ];
  

  @ViewChild('aboutMeBox') aboutMeBox!: ElementRef;
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('headline') headline!: ElementRef;
  @ViewChild('middlebox') middlebox!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === this.aboutMeBox.nativeElement) {
            this.aboutMeBox.nativeElement.classList.add('visible');
          }
          if (entry.target === this.wrapper.nativeElement) {
            this.wrapper.nativeElement.classList.add('visible');
          }
          if (entry.target === this.headline.nativeElement) {
            this.headline.nativeElement.classList.add('visible');
          }
          if (entry.target === this.middlebox.nativeElement) {
            this.middlebox.nativeElement.classList.add('visible');
          }
        } else {
          if (entry.target === this.wrapper.nativeElement) {
            this.wrapper.nativeElement.classList.remove('visible');
          }
          if (entry.target === this.headline.nativeElement) {
            this.headline.nativeElement.classList.remove('visible');
          }
          if (entry.target === this.middlebox.nativeElement) {
            this.middlebox.nativeElement.classList.remove('visible');
          }
        }
      });
    }, { threshold: 0.3});

    observer.observe(this.aboutMeBox.nativeElement);
    observer.observe(this.wrapper.nativeElement);
    observer.observe(this.headline.nativeElement);
    observer.observe(this.middlebox.nativeElement);
  }

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
