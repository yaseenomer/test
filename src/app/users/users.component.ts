import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user.service';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) {
  }
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
  static defaultAdded(value) {
    value.registered = new Date();
    value.balance = 100;
    value.isActive = true;
  }

  ngOnInit() {
     this.userService.getUsers().subscribe(users => this.users = users);

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
      UsersComponent.defaultAdded(value);
      this.userService.addUser(value);
      this.form.reset();
    }
  }
  toggleHide(user: User) {
    user.hide = !user.hide;
  }
  setShowForm(e) {
    this.showForm = !this.showForm;
  }


}
