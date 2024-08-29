import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


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
    }
  ];
}
