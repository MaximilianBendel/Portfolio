import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {

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
