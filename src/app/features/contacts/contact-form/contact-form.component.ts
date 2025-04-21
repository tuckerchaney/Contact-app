import { Component, inject } from '@angular/core';
import { Contact } from '../../../shared/models/contact';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from '../../../shared/services/contact.service';
import { SharedModule } from '../../../shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  imports: [SharedModule],
})
export class ContactFormComponent {
  snackbar = inject(MatSnackBar);
  dialog = inject(MatDialog);
  contactService = inject(ContactService);
  contact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    note: '',
  };

  onSubmit() {
    const { firstName, lastName, email, phone } = this.contact;
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !(email.trim() || phone.trim())
    ) {
      this.snackbar.open(
        'Please fill out First Name, Last Name and either Email or Phone.',
        'Dismiss',
        {
          duration: 3000,
        }
      );
      return;
    }

    this.contactService.addContact(this.contact);
    this.resetForm();
    this.dialog.closeAll();
    this.snackbar.open('Contact Created Successfully!', 'Dismiss', {
      duration: 3000,
    });
  }

  onReset() {
    this.resetForm();
  }

  private resetForm() {
    this.contact = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      note: '',
    };
  }
}
