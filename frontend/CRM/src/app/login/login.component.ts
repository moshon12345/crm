import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';
import { User } from '../signup/user.interface';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { UtilityService } from '../utility.service';
import { UserLogin } from './login.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
// import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login/public-api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../signup/signup.component.scss']
})
export class LoginComponent {

errorMessage?: string;
user: any;
loggedIn: any;


    loginForm = new FormGroup({
        userName: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(12),
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
        ]),
    });

login() {
        this.errorMessage = '';

        const sub = this.http.post<UserLogin>('login', this.loginForm.value).pipe(finalize(() => {
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

    constructor(private http: HttpService, private utility: UtilityService, private router: Router) { }
    

ngOnInit() {
        if (this.utility.getUser()) {
            this.router.navigate(['']);
        }
    }
}

