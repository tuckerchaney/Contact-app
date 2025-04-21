import { Component, signal, effect } from '@angular/core';
import { inject } from '@angular/core';
import { ContactService } from '../../shared/services/contact.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../../features/contacts/contact-form/contact-form.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [SharedModule],
})
export class HeaderComponent {
  dialog = inject(MatDialog);
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
  openContactForm() {
    this.dialog.open(ContactFormComponent, {
      width: '1200px',
      maxWidth: '100%',
      maxHeight: '100%',
    });
  }
}
