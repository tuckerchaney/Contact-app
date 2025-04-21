import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './../features/contacts/contact-card/contact-card.component';
import { ContactListComponent } from './../features/contacts/contact-list/contact-list.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from '../features/contacts/contact-form/contact-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateFormComponent } from '../features/contacts/update-form/update-form.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButton, MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  bootstrap: [],
})
export class SharedModule {}
