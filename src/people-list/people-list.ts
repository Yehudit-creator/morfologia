import { Component } from '@angular/core';
import { ContactInterface } from '../contact-interface';
import { Contact } from '../contact/contact';
@Component({
  imports: [Contact],
  selector: 'app-people-list',
  styleUrl: './people-list.css',
  templateUrl: './people-list.html',
})
export class PeopleList {
  contacts: ContactInterface[] = [
  { id: 1, name: 'נועם רגב', email: 'noam.regev@mailbox.example', phone: '050-1470258' },
  { id: 2, name: 'ליאור שחר', email: 'lior.shachar@mailbox.example', phone: '052-1470369' },
  { id: 3, name: 'מורן אלון', email: 'moran.alon@mailbox.example', phone: '054-1470147' },
  { id: 4, name: 'אסף ברק', email: 'asaf.barak@mailbox.example', phone: '053-1470258' },
  { id: 5, name: 'הדר כרמי', email: 'hadar.carmi@mailbox.example', phone: '058-1470369' },
  { id: 6, name: 'גל נבו', email: 'gal.navo@mailbox.example', phone: '055-1470147' },
];
}
