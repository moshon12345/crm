import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { UtilityService } from '../utility.service';
import { Contact } from './contacts.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {


  // displayMode: 'columns' | 'table' | 'cards' | 'folders' = 'table';
  displayMode = this.utility.modeContact

  changedisplayModeToFolder() {
    this.displayMode = 'folders';
    this.utility.currentDisplayModeContacts(this.displayMode);
  }
  changedisplayModeToTable() {
    this.displayMode = 'table';
    this.utility.currentDisplayModeContacts(this.displayMode);
  }
  changedisplayModeToCard() {
    this.displayMode = 'cards';
    this.utility.currentDisplayModeContacts(this.displayMode);
  }
  
   contacts: Contact[] = [];
   contactsSearch: Contact[] = [];
   selectChoiseHtml: string = '';
   searchVal: string = '';

    remove(item: Contact) {
        const sub = this.http.delete<void>(`contacts/delete/${item.id}`).subscribe(() => {
            const i = this.contacts.findIndex(x => x.id == item.id);
            this.contacts.splice(i, 1);
            this.route.navigate(['/contacts'])

            sub.unsubscribe();
        });
    }

    search() {
      if(this.selectChoiseHtml == 'firstName') {
        const contactsSearch = [];
            for (let i of this.contacts) {
              if (i.firstName.toLowerCase().includes(this.searchVal.toLowerCase())) {
                contactsSearch.push(i);
              }
              this.contactsSearch = contactsSearch;
            }
      }

     if(this.selectChoiseHtml == 'lastName') {
        const contactsSearch = [];
            for (let i of this.contacts) {
              if (i.lastName.toLowerCase().includes(this.searchVal.toLowerCase())) {
                contactsSearch.push(i);
              }
              this.contactsSearch = contactsSearch;
            }
      }

       if(this.selectChoiseHtml == 'email') {
        const contactsSearch = [];
            for (let i of this.contacts) {
              if (i.email.toLowerCase().includes(this.searchVal.toLowerCase())) {
                contactsSearch.push(i);
              }
              this.contactsSearch = contactsSearch;
            }
      }

      if(this.selectChoiseHtml == 'notes') {
        const contactsSearch = [];
            for (let i of this.contacts) {
              if (i.notes.toLowerCase().includes(this.searchVal.toLowerCase())) {
                contactsSearch.push(i);
              }
              this.contactsSearch = contactsSearch;
            }
      }

      if(this.selectChoiseHtml == 'age') {
        const contactsSearch = [];
            for (let i of this.contacts) {
                const currentYear = new Date().getTime();
                const dob = new Date(`"${i.birthday.slice(0, 10)}"`).getTime();
                const result = (((currentYear - dob) / 31585868854));
        
        let age = +result.toFixed(2)

              if (age.toString().includes(this.searchVal)) {
                contactsSearch.push(i);
              }
              this.contactsSearch = contactsSearch;
            }

            if (!contactsSearch.length) {
              this.contactsSearch = this.contacts;
            }
      }
    }


    editContact(item: Contact) {

    }


  constructor(private http: HttpService, private route: Router, private utility: UtilityService) { }

  ngOnInit() {
                const sub = this.http.get<Contact[]>("contacts").subscribe(data => {
            this.contacts = data
            this.contactsSearch = data;
    
            sub.unsubscribe();
        });
  }
}
