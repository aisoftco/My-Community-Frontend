import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  constructor(
    public http: HttpClient,
    private angularFireDatabase: AngularFireDatabase
  ) {}

  getUsers() {
    return this.angularFireDatabase.list('users/');
  }

  getUser(uid) {
    return this.angularFireDatabase.object('/users/' + uid);
  }

  createUser(user) {
    this.providePhoto(user);
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }

  editUser(user) {
    this.providePhoto(user);
    return this.angularFireDatabase.object('/users/' + user.uid).update(user);
  }

  providePhoto(user) {
    if (!user.photoURL) user.photoURL = '../assets/imgs/man.png';
  }
}
