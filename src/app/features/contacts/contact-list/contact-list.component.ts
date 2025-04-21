import { Component, computed, inject } from '@angular/core';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { ContactService } from '../../../shared/services/contact.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
  imports: [SharedModule, ContactCardComponent],
})
export class ContactListComponent {
  contactService = inject(ContactService);

  sortedContacts = computed(() =>
    this.contactService
      .contacts()
      .slice()
      .sort((a, b) => a.lastName.localeCompare(b.lastName))
  );
}
