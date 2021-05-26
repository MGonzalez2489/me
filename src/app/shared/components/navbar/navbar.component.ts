import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { HostListener } from '@angular/core';
import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  gc = GlobalConstants;
  toggleOpen: boolean;
  icons={
    menu: faBars
  }
  constructor() { }

  ngOnInit(): void {

  }
  toggleMenu() {
    this.toggleOpen = !this.toggleOpen;
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset < element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}
