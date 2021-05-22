import { Component, OnInit } from '@angular/core';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkedAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalConstants } from 'src/app/common/global-constants';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  icons = {
    email: faEnvelope,
    address: faMapMarkerAlt,
    country: faMapMarkedAlt,
    twitter: faTwitter,
    linkedIn: faLinkedin
  };
  gc = GlobalConstants;
  constructor() { }

  ngOnInit(): void {
  }

}
