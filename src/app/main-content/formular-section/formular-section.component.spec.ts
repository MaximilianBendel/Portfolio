import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularSectionComponent } from './formular-section.component';

describe('FormularSectionComponent', () => {
  let component: FormularSectionComponent;
  let fixture: ComponentFixture<FormularSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
