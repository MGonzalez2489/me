import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpJobsComponent } from './exp-jobs.component';

describe('ExpJobsComponent', () => {
  let component: ExpJobsComponent;
  let fixture: ComponentFixture<ExpJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
