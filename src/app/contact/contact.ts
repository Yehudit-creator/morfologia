import { Component, input, Input } from '@angular/core';
import { ContactInterface } from '../contact-interface';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  @Input() con!:ContactInterface;
  //  = { name: '', email: '', phone: '' };
  // @Input() singleContact!: { name: string; email: string; phone: string };
  // @Input() name!: string; 
  // @Input() email!: string; 
  // @Input() phone!: string ;
}
