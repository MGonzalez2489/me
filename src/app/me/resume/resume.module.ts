import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { ExpJobsComponent } from './component/exp-jobs/exp-jobs.component';
import { ExpEducationComponent } from './component/exp-education/exp-education.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerComponent } from './component/banner/banner.component';
import { ExpSkillsComponent } from './component/exp-skills/exp-skills.component';
import { CurrentLearningComponent } from './component/current-learning/current-learning.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ResumeComponent, ExpEducationComponent, ExpJobsComponent, BannerComponent, ExpSkillsComponent, CurrentLearningComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class ResumeModule { }
