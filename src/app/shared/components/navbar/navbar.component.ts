import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  gc = GlobalConstants;
  toggleOpen: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu() {
    this.toggleOpen = !this.toggleOpen;
  }

}
