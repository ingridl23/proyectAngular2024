import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantMarykayComponent } from './consultant-marykay.component';

describe('ConsultantMarykayComponent', () => {
  let component: ConsultantMarykayComponent;
  let fixture: ComponentFixture<ConsultantMarykayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultantMarykayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantMarykayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
