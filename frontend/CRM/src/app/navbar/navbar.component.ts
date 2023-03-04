import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from '../http.service';
import { UtilityService } from '../utility.service';
import { Nav } from './navbar.interface';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    active: string = '';
    isOpen: boolean = false;

    menuLoged: Nav[] = [
        // { route: '/', title: 'Home', icon: 'home' },
        { route: '/about', title: 'About', icon: 'fas fa-info' },
        { route: '/loguot', title: 'Logout', icon: 'fas fa-sign-out' },
    ];
    
    menuNotLoged: Nav[] = [
        { route: '/about', title: 'About', icon: 'fas fa-info' },
        { route: '/login', title: 'Login', icon: 'fas fa-sign-in' },
        { route: '/signup', title: 'Signup', icon: 'fas fa-address-card' },
    ];

    sidebar: Nav[] = [
        { route: '/customers', title: 'Customers', icon: "fas fa-group" },
        { route: '/contacts', title: 'Contacts', icon: "fas fa-address-book-o" },
    ];

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

    changeIsOpen() {
            this.isOpen = false;
    }

    constructor(private router: Router, public utility: UtilityService, private http: HttpService) {

        router.events.subscribe(ev => {
            if (ev instanceof NavigationStart) {
                if (ev.url == '/loguot') {
                    this.logout()
                }
                this.active = ev.url;
                this.isOpen = false;
            }
        });
    }

    ngOnInit() {

    }

}