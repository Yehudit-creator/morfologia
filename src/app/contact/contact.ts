import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  @Input() singleContact!: { name: string; email: string; phone: string };
  // @Input() name!: string; 
  // @Input() email!: string; 
  // @Input() phone!: string ;
}
