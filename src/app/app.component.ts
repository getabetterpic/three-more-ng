import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '@/app/auth0/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public sidenavOpened = false;

  constructor(
    public auth: AuthService,
    router: Router
  ) {
    router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => this.sidenavOpened = false);
  }

  public ngOnInit(): void {
    this.auth.localAuthSetup();
  }
}
