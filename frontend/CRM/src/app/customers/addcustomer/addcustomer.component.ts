import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { finalize } from 'rxjs';
import { Customer } from '../customers.interface';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})

export class AddcustomerComponent implements OnInit {
  isSend = false;

  customerForm = new FormGroup({
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
    email: new FormControl('', [
        Validators.required,
        Validators.email,
    ]),
    phone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
    ]),
    companyName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(14),
    ]),
    position: new FormControl('', [
    ]),
    firstConvSum: new FormControl('', [
    ]),
    notes: new FormControl('', [
    ]),
});

  save() {
            const sub = this.http.post<Customer>('customers/add', this.customerForm.value).pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            this.router.navigate(['/customers']);
        });
        this.isSend = true;
        this.customerForm.reset();
  }

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {

  }

}
