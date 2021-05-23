import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { ExpJobsComponent } from './component/exp-jobs/exp-jobs.component';
import { ExpEducationComponent } from './component/exp-education/exp-education.component';


@NgModule({
  declarations: [ResumeComponent,ExpEducationComponent, ExpJobsComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
