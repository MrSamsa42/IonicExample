import { Component } from '@angular/core';
import { Contacts, ContactFieldType, IContactFindOptions } from '@ionic-native/contacts';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  ourtype: ContactFieldType[] = ["displayName"];
  contactsFound = [];
  constructor(private contacts: Contacts) {
    this.search('');

  }
  search(q) {
    const option: IContactFindOptions = {
      filter: q
    }
    this.contacts.find(this.ourtype, option).then(filteredContacts => {
      this.contactsFound = filteredContacts;
    })
  }

  onKeyUp(event) {
    this.search(event.target.value);
  }
}
