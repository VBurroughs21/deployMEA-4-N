import { Component } from '@angular/core';

import { ApiService } from './api.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test: {}
  users = []
  user = new User()

  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this._apiService.getUsers()
    .then((data) => {
      this.users = data.users
    });
  }

  formSubmit() {
    console.log(this.user, "in formsubmit()");
    
    this._apiService.createUser(this.user)
    .then((data) => {
      this.test = data
      this.getUsers()
    });

    this.user = new User();
  }

  deleteUser(userId) {
 
    this._apiService.deleteUser(userId)
    .then((data) => {
      this.test = data
      this.getUsers()
    });
  }
}
