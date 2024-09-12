import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {

  projects = [
    {
      id: '01/02',
      title: 'Join',
      technologies: 'HTML | CSS | JavaScript | Firebase',
      description: 'Task Management Web-App zur Organisation mehrerer Anwender, inspiriert vom Kanban-System. Erlaubt die Erstellung und Verwaltung von Aufgaben mit Drag´n Drop-Funktionalität.',
      githubLink: 'https://github.com/MaximilianBendel/Join-Projekt',
      liveTestLink: 'https://join.maximilian-bendel.de/',
      imgSrc: 'assets/images/images_portfolio/join-project.png',
      arrowImgSrc: 'assets/images/images_portfolio/arrow-portfolio.png'
    },
    {
      id: '02/02',
      title: 'El Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Web-Browser Spiel mit objektorientierter Programmierung, basierend auf HTML Canvas.',
      githubLink: 'https://github.com/MaximilianBendel/Ell-Pollo-Loco',
      liveTestLink: 'https://elpolloloco.maximilian-bendel.de',
      imgSrc: 'assets/images/images_portfolio/ell-pollo-loco-png.png',
      arrowImgSrc: 'assets/images/images_portfolio/arrow-portfolio.png'
    }
  ];

  @ViewChild('aboutMeBox') aboutMeBox!: ElementRef;
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('headline') headline!: ElementRef;
  @ViewChildren('projectbox') projectBoxes!: QueryList<ElementRef>;

  constructor() {}

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
          this.projectBoxes.forEach((box) => {
            if (entry.target === box.nativeElement) {
              box.nativeElement.classList.add('visible');
            }
          });
        } else {
          if (entry.target === this.wrapper.nativeElement) {
            this.wrapper.nativeElement.classList.remove('visible');
          }
          if (entry.target === this.headline.nativeElement) {
            this.headline.nativeElement.classList.remove('visible');
          }
          this.projectBoxes.forEach((box) => {
            if (entry.target === box.nativeElement) {
              box.nativeElement.classList.remove('visible');
            }
          });
        }
      });
    }, { threshold: 0.45});

    observer.observe(this.aboutMeBox.nativeElement);
    observer.observe(this.wrapper.nativeElement);
    observer.observe(this.headline.nativeElement);
    this.projectBoxes.forEach((box) => {
      observer.observe(box.nativeElement);
    });
  }
}
