import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  gc = GlobalConstants;
  constructor() { }

  ngOnInit(): void {
  }

}
