import { Component, inject, input } from '@angular/core';
import { Contact } from '../../../shared/models/contact';
import { ContactService } from '../../../shared/services/contact.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css',
  imports: [SharedModule],
})
export class ContactCardComponent {
  dialog = inject(MatDialog);
  contact = input.required<Contact>();
  private contactService = inject(ContactService);
  deleteContact() {
    this.contactService.deleteContact(this.contact().id);
  }
  editContact() {
    this.dialog.open(UpdateFormComponent, {
      width: '1200px',
      maxWidth: '100%',
      maxHeight: '100%',
      data: this.contact,
    });
  }
}
