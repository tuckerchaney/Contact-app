import { Component, inject, input } from '@angular/core';
import { Contact } from '../../../shared/models/contact';
import { ContactService } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css',
  standalone: false,
})
export class ContactCardComponent {
  contact = input.required<Contact>();
  private contactService = inject(ContactService);
  deleteContact() {
    this.contactService.deleteContact(this.contact().id);
  }
}
