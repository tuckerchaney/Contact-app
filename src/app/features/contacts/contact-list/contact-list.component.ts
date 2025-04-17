import { CommonModule, NgFor } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { Contact } from '../../../shared/models/contact';
import { contactDummyData } from '../../../shared/data/data';
import { ContactService } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
  standalone: false,
})
export class ContactListComponent {
  contactService = inject(ContactService);


  sortedContacts = computed(() =>
    this.contactService.contacts()
      .slice()
      .sort((a, b) => a.lastName.localeCompare(b.lastName))
  );
  
}
