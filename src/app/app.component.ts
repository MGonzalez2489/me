import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'me';
  constructor(private readonly updates: SwUpdate) {
    this.updates.available.subscribe(event => {
      this.showAppUpdateAlert();
    });
  }

  showAppUpdateAlert() {
    var answer = window.confirm("App Update available. Do you want to update?");
    if (answer) {
      this.updates.activateUpdate().then(() => document.location.reload());

    }
  }

}
