import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { PeopleList } from '../people-list/people-list';

export const routes: Routes = [
     {
    path: '',
    component: Home
  },
    {
    path: 'contact',
    component: PeopleList
  }
];
