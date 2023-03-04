import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Contact } from '../contacts.interface';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact?: Contact;
  sub?: Subscription;


    getCustomerDetails(id: string) {
        const sub = this.http.get<Contact>(`contactDetails/${id}`).subscribe(item => {
           if (item == null) {
            this.router.navigate(['contacts'])
            return;
           }
            const currentYear = new Date().getTime();
        const dob = new Date(`"${item.birthday.slice(0, 10)}"`).getTime();
        const result = (((currentYear - dob) / 31585868854));
        
        item.age = +result.toFixed(2)

        this.contact = item
        
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
