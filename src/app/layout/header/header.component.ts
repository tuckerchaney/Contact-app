import { Component, signal, effect } from '@angular/core';
import { inject } from '@angular/core';
import { ContactService } from '../../shared/services/contact.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: false,
})
export class HeaderComponent {
  contactService = inject(ContactService);
  searchTerm = signal<string>('');

  constructor() {
    effect(() => {
      if (this.searchTerm() === '') {
        // this.contactService.contacts.set(this.contactService.contacts());
        return;
      }
      this.contactService.searchContact(this.searchTerm());
    });
  }
}
