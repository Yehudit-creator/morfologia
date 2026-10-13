import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-people-list',
  styleUrl: './people-list.css',
  templateUrl: './people-list.html',
})
export class PeopleList {
    contacts = [
    { id: 1, name: 'יוסי כהן', email: 'yosi@example.com', phone: '050-9876543' },
    { id: 2, name: 'דנה לוי', email: 'dana@example.com', phone: '050-1234567' },
  ];
}
