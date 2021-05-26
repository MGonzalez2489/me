import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {
  pageYoffset;
  icons={
    up: faAngleUp
  }
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) { }
  ngOnInit(): void {

  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}