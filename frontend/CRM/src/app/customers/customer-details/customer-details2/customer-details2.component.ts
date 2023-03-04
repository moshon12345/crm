import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Customer } from '../../customers.interface';

@Component({
  selector: 'app-customer-details2',
  templateUrl: './customer-details2.component.html',
  styleUrls: ['./customer-details2.component.scss']
})
export class CustomerDetails2Component implements OnInit {

  customer?: Customer;
  sub?: Subscription;


    getCustomerDetails(id: string) {
        const sub = this.http.get<Customer>(`customerDetails/${id}`).subscribe(item => {
           if (item == null) {
            this.router.navigate(['Customers'])
            return;
           }
        //     const currentYear = new Date().getTime();
        // const dob = new Date(`"${item.birthday.slice(0, 10)}"`).getTime();
        // const result = (((currentYear - dob) / 31585868854));
        
        // item.age = +result.toFixed(2)

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

