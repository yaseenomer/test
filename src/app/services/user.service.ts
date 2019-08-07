import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'yaseen',
        lastName: 'omer',
        email: 'yaseeno373@gmail.com',
        isActive: true,
        balance: 10000,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'ali',
        lastName: 'hassan',
        email: 'ali@gmail.com',
        isActive: false,
        balance: 12000,
        registered: new Date('01/11/2020 11:30:00'),
        hide: true
      }
    ];
  }
  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
