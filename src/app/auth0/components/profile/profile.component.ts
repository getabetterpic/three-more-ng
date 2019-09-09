import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/app/auth0/services/auth.service';

@Component({
  selector: 'tmm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
