import { Component, OnInit } from '@angular/core';
import { faBriefcase, faGlobe, faMobile, faRocket } from '@fortawesome/free-solid-svg-icons';

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
  constructor() { }

  ngOnInit(): void {
  }

}
