import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from '../http.service';
import { SearchPipe } from '../search.pipe';
import { UtilityService } from '../utility.service';
import { Customer } from './customers.interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  //  displayMode: 'columns' | 'table' | 'cards' | 'folders' = 'table';
   displayMode = this.utility.modeCustomer

  changedisplayModeToFolder() {
    this.displayMode = 'folders';
    this.utility.currentDisplayModeCustomers(this.displayMode);
  }
  changedisplayModeToTable() {
    this.displayMode = 'table';
    this.utility.currentDisplayModeCustomers(this.displayMode);
  }
  changedisplayModeToCard() {
    this.displayMode = 'cards';
    this.utility.currentDisplayModeCustomers(this.displayMode);
  }

 customers: Customer[] = [];
 customersSearch: Customer[] = [];
 searchVal: string = '';
 selectChoiseHtml: string = '';

   search() {
      if(this.selectChoiseHtml == 'firstName') {
        const customersSearch = [];
            for (let i of this.customers) {
              if (i.firstName.toLowerCase().includes(this.searchVal.toLowerCase())) {
                customersSearch.push(i);
              }
              this.customersSearch = customersSearch;
            }
      }

     if(this.selectChoiseHtml == 'lastName') {
        const customersSearch = [];
            for (let i of this.customers) {
              if (i.lastName.toLowerCase().includes(this.searchVal.toLowerCase())) {
                customersSearch.push(i);
              }
              this.customersSearch = customersSearch;
            }
      }

       if(this.selectChoiseHtml == 'email') {
        const customersSearch = [];
            for (let i of this.customers) {
              if (i.email.toLowerCase().includes(this.searchVal.toLowerCase())) {
                customersSearch.push(i);
              }
              this.customersSearch = customersSearch;
            }
      }

      // if(this.selectChoiseHtml == 'notes') {
      //   const customersSearch = [];
      //       for (let i of this.customers) {
      //         if (i.Notes.toLowerCase().includes(this.searchVal.toLowerCase())) {
      //           customersSearch.push(i);
      //         }
      //         this.customersSearch = customersSearch;
      //       }
      // }
    }


    remove(item: Customer) {
        const sub = this.http.delete<void>(`customers/delete/${item.id}`).subscribe(() => {
            const i = this.customers.findIndex(x => x.id == item.id);
            this.customers.splice(i, 1);

            sub.unsubscribe();
        });
    }

  constructor(private http: HttpService, private route: Router, private utility: UtilityService) { }

  ngOnInit() {
            const sub = this.http.get<Customer[]>("customers").subscribe(data => {
            this.customers = data
            this.customersSearch = data
            sub.unsubscribe();
        });   
  }

}
