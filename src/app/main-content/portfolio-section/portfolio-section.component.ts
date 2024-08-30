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
      id: '01/04',
      title: 'Join',
      technologies: 'HTML | CSS | JavaScript | Firebase',
      description: 'Task Manager inspired by the Kanban System. Create and organize tasks during drag and drop functions, assign users and categories.',
      githubLink: 'https://github.com/yourrepo/join',
      liveTestLink: 'https://your-live-link.com',
      imgSrc: 'assets/images/images_portfolio/join.png',
      arrowImgSrc: 'assets/images/images_portfolio/arrow-portfolio.png'
    },
    {
      id: '02/04',
      title: 'Project 2',
      technologies: 'React | Node.js',
      description: 'Description for project 2.',
      githubLink: 'https://github.com/yourrepo/project2',
      liveTestLink: 'https://your-live-link.com',
      imgSrc: 'assets/images/images_portfolio/join.png',
      arrowImgSrc: 'assets/images/images_portfolio/arrow-portfolio.png'
    },
    {
      id: '03/04',
      title: 'Weather App',
      technologies: 'Vue.js | API Integration | CSS',
      description: 'A weather forecasting app that uses an external API to fetch and display weather data for any location.',
      githubLink: 'https://github.com/yourrepo/weatherapp',
      liveTestLink: 'https://your-live-link.com',
      imgSrc: 'assets/images/images_portfolio/join.png',
      arrowImgSrc: 'assets/images/images_portfolio/arrow-portfolio.png'
    },
    {
      id: '04/04',
      title: 'E-Commerce Site',
      technologies: 'Shopify | Liquid | JavaScript',
      description: 'An e-commerce platform built with Shopify, including custom themes and functionalities for a seamless shopping experience.',
      githubLink: 'https://github.com/yourrepo/ecommerce',
      liveTestLink: 'https://your-live-link.com',
      imgSrc: 'assets/images/images_portfolio/join.png',
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
