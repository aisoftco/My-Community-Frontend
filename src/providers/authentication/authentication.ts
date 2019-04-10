import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvidersAuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  constructor(
    public http: HttpClient,
    public angularFireAuth: AngularFireAuth
  ) {}

  loginWithEmail(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
  }

  loginWithGoogle() {
    return this.angularFireAuth.auth.signInWithRedirect(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  loginWithFacebook() {
    return this.angularFireAuth.auth.signInWithRedirect(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  registerWithEmail(email: string, password: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  getStatus() {
    return this.angularFireAuth.authState;
  }

  getCurrentUser() {
    return this.angularFireAuth.auth.currentUser;
  }

  logOut() {
    return this.angularFireAuth.auth.signOut();
  }
}
