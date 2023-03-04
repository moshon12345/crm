import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { UtilityService } from './utility.service';
import { finalize } from 'rxjs';
import { UserLogin } from './login/login.interface';
import { User } from './signup/user.interface';
import { UserGoogle } from './userGoogleInterFace/googleUserInterFace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'CRM';

user: any;
loggedIn: any;
errorMessage?: string;

login(user: UserGoogle) {
    this.utility.setUser(this.user);
    let sendUser = {
        userName: user.name+user.id,
        password: user.id
}
    this.user = sendUser; 
        this.errorMessage = '';

        const sub = this.http.post<UserLogin>('login', this.user).pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            if (data.status == 'error') {
                this.errorMessage = data.message;
            } else {
                this.utility.setUser(data.user);
                this.router.navigate(['']);
            }
        });
}

logout() {
        const sub = this.http.get("logout").pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(() => {
            this.utility.setUser();
            this.router.navigate(['login']);
        });
    }

google() {
      this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      const sub = this.http.post<UserLogin>("googleSignUp/", this.user).pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            // console.log(data.user)
            if (data.status == 'error') {
                this.errorMessage = data.message;
            } else {
                this.utility.setUser(data.user);
                this.login(this.user);
                this.user = data.user;
                this.router.navigate(['']);
                // this.login(this.user);
            }
        });
   });
}

    constructor(private authService: SocialAuthService, public utility: UtilityService, private http: HttpService, private router: Router) { }



  ngOnInit() {
    this.utility.loader(true);
        const sub = this.http.get<UserLogin>("login").pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            if (data.status == 'error') {
                this.router.navigate(['']);
            } else {
                this.utility.setUser(data.user);
            }
        });
        this.google();
    }
}
