import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './../features/contacts/contact-card/contact-card.component';
import { ContactListComponent } from './../features/contacts/contact-list/contact-list.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactCardComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ContactCardComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [],
})
export class SharedModule {}
