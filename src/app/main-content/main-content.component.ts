import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { FormularSectionComponent } from "./formular-section/formular-section.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboveTheFoldComponent, AboutMeComponent, MySkillsComponent, PortfolioSectionComponent, FormularSectionComponent, FormularSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
