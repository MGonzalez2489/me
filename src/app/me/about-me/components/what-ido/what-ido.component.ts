import { Component, OnInit } from '@angular/core';
import { faCogs, faDatabase, faAddressCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-what-ido',
  templateUrl: './what-ido.component.html',
  styleUrls: ['./what-ido.component.scss']
})
export class WhatIDoComponent implements OnInit {
  icons = {
    database: faDatabase,
    backend: faCogs,
    frontend: faAddressCard
  };
  constructor() { }

  ngOnInit(): void {
  }

}
