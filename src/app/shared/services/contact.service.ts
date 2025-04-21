import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Contact } from './../models/contact';
import { contactDummyData } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private allContacts = signal<Contact[]>(contactDummyData);
  contacts = signal<Contact[]>(contactDummyData);
  deleteContact(id: number) {
    this.contacts.update((contacts) =>
      contacts.filter((contact) => contact.id !== id)
    );
  }
  searchContact(searchTerm: string) {
    const lowerTerm = searchTerm.toLowerCase();
    const filtered = this.allContacts().filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(lowerTerm) ||
        contact.lastName.toLowerCase().includes(lowerTerm) ||
        contact.email.toLowerCase().includes(lowerTerm) ||
        contact.phone.toLowerCase().includes(lowerTerm)
    );
    this.contacts.set(filtered);
  }

  addContact(contact: Contact) {
    this.contacts.update((contacts) => {
      const newContact = { ...contact, id: Math.random() * 100000 };
      const newContacts = [...contacts, newContact];
      return newContacts;
    });
  }
}
