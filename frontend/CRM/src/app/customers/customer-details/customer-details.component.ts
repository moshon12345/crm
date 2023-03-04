import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Customer } from '../customers.interface';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customer?: Customer;
  sub?: Subscription;


    getCustomerDetails(id: string) {
        const sub = this.http.get<Customer>(`customerDetails/${id}`).subscribe(item => {
            if (item == null) {
            this.router.navigate(['customers']);
            return;
           }
            this.customer = item
           
            sub.unsubscribe();
        });
    }

    constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) {

        this.sub = this.route.params.subscribe(params => {
            this.getCustomerDetails(params['id']);
        });

    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}