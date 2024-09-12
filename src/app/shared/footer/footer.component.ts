import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @ViewChild('backgroundDiv') backgroundDiv!: ElementRef;
  @ViewChild('leftText') leftText!: ElementRef;
  @ViewChild('rightBox') rightBox!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === this.backgroundDiv.nativeElement) {
            this.backgroundDiv.nativeElement.classList.add('visible');
          }
          if (entry.target === this.leftText.nativeElement) {
            this.leftText.nativeElement.classList.add('visible');
          }
          if (entry.target === this.rightBox.nativeElement) {
            this.rightBox.nativeElement.classList.add('visible');
          }
        } else {
          if (entry.target === this.backgroundDiv.nativeElement) {
            this.backgroundDiv.nativeElement.classList.remove('visible');
          }
          if (entry.target === this.leftText.nativeElement) {
            this.leftText.nativeElement.classList.remove('visible');
          }
          if (entry.target === this.rightBox.nativeElement) {
            this.rightBox.nativeElement.classList.remove('visible');
          }
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this.backgroundDiv.nativeElement);
    observer.observe(this.leftText.nativeElement);
    observer.observe(this.rightBox.nativeElement);
  }

}
