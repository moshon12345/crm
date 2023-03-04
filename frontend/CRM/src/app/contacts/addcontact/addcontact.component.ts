import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { finalize } from 'rxjs';
import { Contact } from '../contacts.interface';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})

export class AddcontactComponent implements OnInit {
  isSend = false;

  contactForm = new FormGroup({
    firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
    ]),
    lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
    ]),
    birthday: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
    ]),
    email: new FormControl('', [
        Validators.required,
        Validators.email,
    ]),
    phone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
    ]),
    state: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
    ]),
    country: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
    ]),
    city: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
    ]),
    street: new FormControl('', [
    ]),
    houseNumber: new FormControl('', [
    ]),
    zip: new FormControl('', [
    ]),
    notes: new FormControl('', [
    ]),
});

  save() {
            const sub = this.http.post<Contact>('contacts/add', this.contactForm.value).pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            this.router.navigate(['/contacts']);
        });
        this.isSend = true;
        this.contactForm.reset();
  }

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {

  }

}
