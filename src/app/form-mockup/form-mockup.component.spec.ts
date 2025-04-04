import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMockupComponent } from './form-mockup.component';

describe('FormMockupComponent', () => {
  let component: FormMockupComponent;
  let fixture: ComponentFixture<FormMockupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMockupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
