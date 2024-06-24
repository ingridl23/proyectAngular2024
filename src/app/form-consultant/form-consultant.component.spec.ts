import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsultantComponent } from './form-consultant.component';

describe('FormConsultantComponent', () => {
  let component: FormConsultantComponent;
  let fixture: ComponentFixture<FormConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormConsultantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
