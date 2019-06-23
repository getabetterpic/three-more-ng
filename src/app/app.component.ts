import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sidenavOpened = false;

  constructor(
    router: Router
  ) {
    router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => this.sidenavOpened = false);
  }
}
