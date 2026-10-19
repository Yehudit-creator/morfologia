import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
    name = signal('');
  email = signal('');
  subscribed = signal(false);

  subscribe(event: Event) {
    event.preventDefault();

    // כאן בהמשך שולחים לשרת או לשירות דיוור
    console.log('נרשם:', this.name(), this.email());

    this.subscribed.set(true);
  }
}
