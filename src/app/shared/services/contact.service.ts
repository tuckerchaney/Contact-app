import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Contact } from './../models/contact';
import { contactDummyData } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts = signal<Contact[]>(contactDummyData);
  constructor() {}
  deleteContact(id: number) {
    this.contacts.update((contacts) =>
      contacts.filter((contact) => contact.id !== id)
    );
  }
  searchContact(searchTerm: string) {
    this.contacts.update((contacts) =>
      contacts.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
}
