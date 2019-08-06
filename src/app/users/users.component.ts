import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../models/User';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  currentClass = {};
  enableAdd = false;
  showForm = false;
  @ViewChild('userForm', { static: false}) form: any;

  constructor() {
  }

  ngOnInit() {
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
    this.addCurrentClass();
  }
  addCurrentClass() {
    this.currentClass = {
      'btn btn-success': true };
  }

  onSubmit({ value, valid }: { value: User, valid: boolean}) {
    if (! valid) {
      console.log('form is not invalid ');
    } else {
      value.registered = new Date();
      value.balance = 100;
      this.users.unshift(value);
    }
  }
  toggleHide(user: User) {
    user.hide = !user.hide;
  }
  setShowForm(e) {
    this.showForm = !this.showForm;
  }


}
