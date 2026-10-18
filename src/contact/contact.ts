import { Component, input } from '@angular/core';
import { ContactInterface } from '../contact-interface';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  name = input.required<string>();
  email = input.required<string>();
  phone = input.required<string>();
  
}
