import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpSkillsComponent } from './exp-skills.component';

describe('ExpSkillsComponent', () => {
  let component: ExpSkillsComponent;
  let fixture: ComponentFixture<ExpSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
