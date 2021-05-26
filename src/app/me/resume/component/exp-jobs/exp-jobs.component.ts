import { Component, OnInit } from '@angular/core';
import { faBriefcase, faGlobe, faMobile, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Job } from 'src/app/shared/models';

@Component({
  selector: 'app-exp-jobs',
  templateUrl: './exp-jobs.component.html',
  styleUrls: ['./exp-jobs.component.scss']
})
export class ExpJobsComponent implements OnInit {
  icons = {
    globe: faGlobe,
    rocket: faRocket,
    briefcase: faBriefcase,
    mobile: faMobile
  }
  jobsHistory: Array<Job> = [
    {
      title: 'Software Developer',
      icon: this.icons.globe,
      company: 'Syseti',
      description: 'Creating custom solutions for clients and support to legacy applications using .NET and Microsoft SQL Server.',
      period: 'Oct 2012 - Jan 2013',
    },
    {
      title: 'Full Stack Developer',
      icon: this.icons.rocket,
      company: 'Servicios de Programación de Chihuahua',
      description: ' Software developer creating custom solutions and responsable for an' +
        'e-invoicing application. Always working on' +
        'scrum teams. Responsible for creating and posting software patches and' +
        'alerts to the customer web site.' +
        'Coordinate the packaging and delivery of new software to manufacturing.',
      period: 'Feb 2013 - Dec 2016',
    },
    {
      title: '.Net Developer and Angular Developer',
      icon: this.icons.briefcase,
      company: 'Gamma Partners',
      description: 'Improve and maintenance of legacy applications using .NET and Angular, always ' +
        'orientated to create and support custom solutions',
      period: 'Jan 2017 - May 2019',
    },
    {
      title: 'Lead Software Enginee',
      icon: this.icons.mobile,
      company: 'PK',
      description: 'Designed, supported, and improved a multi-user application hosted in Azure' +
        'Cloud using Angular, NodeJs + SailsJs, and PostgreSQL.',
      period: 'May 2019',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
