import { Component } from '@angular/core';

interface Skill {
  name: string;
  img: string;
}

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

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
  
}
