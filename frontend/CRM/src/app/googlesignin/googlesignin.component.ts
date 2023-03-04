import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-googlesignin',
  templateUrl: './googlesignin.component.html',
  styleUrls: ['./googlesignin.component.scss']
})
export class GooglesigninComponent implements OnInit {

user: any;
loggedIn: any;

 constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
