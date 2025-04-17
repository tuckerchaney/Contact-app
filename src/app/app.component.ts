import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactCardComponent } from './features/contacts/contact-card/contact-card.component';
import { SharedModule } from './shared/shared.module';
import { Contact } from './shared/models/contact';
import { ContactListComponent } from './features/contacts/contact-list/contact-list.component';
@Component({
  selector: 'app-root',
  imports: [SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'contact-app';
  contact: Contact = {
    firstName: 'Billy',
    lastName: 'Bob',
    address: '123 Main St',
    id: 0,
    email: 'billy.bob@emailaddress.com',
    phone: '1555555555',
    note: 'Billy Bob is a great guy',
  };
}
