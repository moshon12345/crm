import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Contact } from '../contacts.interface';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contact?: Contact;
  sub?: Subscription;
  form?: FormGroup;
  ageToDb: number = 0;


  buildForm(item?: Contact) { 
    this.form = new FormGroup({
    firstName: new FormControl(item?.firstName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
    ]),
    lastName: new FormControl(item?.lastName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
    ]),
    birthday: new FormControl(item?.birthday.slice(0, 10), [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
    ]),
    email: new FormControl(item?.email, [
        Validators.required,
        Validators.email,
    ]),
    phone: new FormControl(item?.phone, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
    ]),
    state: new FormControl(item?.state, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
    ]),
    country: new FormControl(item?.country, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
    ]),
    city: new FormControl(item?.city, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
    ]),
    street: new FormControl(item?.street, [
    ]),
    houseNumber: new FormControl(item?.houseNumber, [
    ]),
    zipCode: new FormControl(item?.zipCode, [
    ]),
    notes: new FormControl(item?.notes, [
    ]),
    });
}

save() {
  const currentYear = new Date().getTime();
        const dob = new Date(`"${this.form?.value.birthday.slice(0, 10)}"`).getTime();
        const result = (((currentYear - dob) / 31585868854));

        this.ageToDb =  +result.toFixed(1);

 const sub = this.http.put<void>(`contactEdit/${this.contact?.id}`, this.form?.value).subscribe(() => {
            this.router.navigate(['contacts']);
            sub.unsubscribe();
        });
    }

    getContact(id: string) {
        const sub = this.http.get<Contact>(`contactEdit/${id}`).subscribe(item => {
            this.contact = item;
            this.buildForm(item);
            sub.unsubscribe();
        });
    }

    refreshIt() {
        this.sub = this.route.params.subscribe(params => {
            this.getContact(params['id']);
        });
    }

    constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) {

        this.sub = this.route.params.subscribe(params => {
            this.getContact(params['id']);
        });

    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}