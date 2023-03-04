import { Injectable } from '@angular/core';
import { User } from './signup/user.interface';
import { UserGoogle } from './userGoogleInterFace/googleUserInterFace';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    private user?: User;
    public googleUser?: UserGoogle;
    public modeContact?: string = 'table'
    public modeCustomer?: string = 'table'
    isLoader?: boolean;

    setUser(user?: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    loader(isStart: boolean) {
        this.isLoader = isStart;
        document.body.style.overflow = isStart ? 'hidden' : 'initial';
    }
    
    currentDisplayModeContacts(mode: string) {
        this.modeContact = mode;
    }

    currentDisplayModeCustomers(mode: string) {
        this.modeCustomer = mode;
    }

    constructor() { }
}
