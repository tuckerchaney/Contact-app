import { Component, inject, Inject, Signal } from '@angular/core';
import { Contact } from '../../../shared/models/contact';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactService } from '../../../shared/services/contact.service';
import { SharedModule } from '../../../shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css',
  imports: [SharedModule],
})
export class UpdateFormComponent {
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
        'Please fill out First Name, Last Name and either Email or Phone.'
      );
      return;
    }

    this.contactService.deleteContact(this.contact.id);
    this.contactService.addContact(this.contact);
    this.resetForm();
    this.dialog.closeAll();
    this.snackbar.open('Contact Updated Successfully!', 'Dismiss', {
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: Signal<Contact>) {
    this.contact = data();
  }
}
