import { AppComponent } from './app.component';
import createSpyObj = jasmine.createSpyObj;
import { Subject } from 'rxjs';
import { NavigationEnd } from '@angular/router';

describe('AppComponent', () => {
  let app: AppComponent;
  let router;

  beforeEach(() => {
    router = createSpyObj('Router', ['']);
    router.events = new Subject();
    app = new AppComponent(router);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('on navigation end', () => {
    it('closes the sidenav', () => {
      app.sidenavOpened = true;
      router.events.next(new NavigationEnd(1, '/a/new/url', '/another/url'));
      expect(app.sidenavOpened).toBe(false);
    });
  });
});
