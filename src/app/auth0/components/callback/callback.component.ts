import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/app/auth0/services/auth.service';

@Component({
  selector: 'tmm-callback',
  template: ''
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthService) { }

  public ngOnInit() {
    this.auth.handleAuthCallback();
  }

}
