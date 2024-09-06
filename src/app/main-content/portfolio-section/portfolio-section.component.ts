import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';


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
      githubLink: 'https://github.com/yourrepo/join',
      liveTestLink: 'https://your-live-link.com',
      imgSrc: 'assets/images/images_portfolio/join-project.png',
      arrowImgSrc: 'assets/images/images_portfolio/arrow-portfolio.png'
    },
    {
      id: '02/02',
      title: 'El Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Web-Browser Spiel mit objektorientierter Programmierung, basierend auf HTML Canvas.',
      githubLink: 'https://github.com/yourrepo/project2',
      liveTestLink: 'https://your-live-link.com',
      imgSrc: 'assets/images/images_portfolio/ell-pollo-loco-png.png',
      arrowImgSrc: 'assets/images/images_portfolio/arrow-portfolio.png'
    }
  ];

  @ViewChild('aboutMeBox') aboutMeBox!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Wenn das Element sichtbar wird, füge die Klasse 'visible' hinzu
          this.aboutMeBox.nativeElement.classList.add('visible');
        }
      });
    });

    observer.observe(this.aboutMeBox.nativeElement);
  }
}
