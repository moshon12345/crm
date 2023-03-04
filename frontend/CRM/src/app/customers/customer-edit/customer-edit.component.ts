import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Customer } from '../customers.interface';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customer?: Customer;
  sub?: Subscription;
  form?: FormGroup;

  buildForm(item?: Customer) { 
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
    email: new FormControl(item?.email, [
        Validators.required,
        Validators.email,
    ]),
    phone: new FormControl(item?.phone, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
    ]),
    companyName: new FormControl(item?.companyName, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(14),
    ]),
    position: new FormControl(item?.position, [
    ]),
    firstConvSum: new FormControl(item?.firstConvSum, [
    ]),
    notes: new FormControl(item?.notes, [
    ]),
    });
  }

save() {
      const sub = this.http.put<void>(`customerEdit/${this.customer?.id}`, this.form?.value).subscribe(() => {
            this.router.navigate(['customers']);
            sub.unsubscribe();
    });
}

    getCustomer(id: string) {
        const sub = this.http.get<Customer>(`customerEdit/${id}`).subscribe(item => {
            this.customer = item;
            this.buildForm(item);
            sub.unsubscribe();
        });
    }

    refreshIt() {
        this.sub = this.route.params.subscribe(params => {
            this.getCustomer(params['id']);
        });
    }

    constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) {

        this.sub = this.route.params.subscribe(params => {
            this.getCustomer(params['id']);
        });

    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
} 
