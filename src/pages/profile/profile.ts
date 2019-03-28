import { UserProvider } from './../../providers/user/user';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ToastController
} from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  photoURL: string;
  name: string;
  profession: string;
  web: string;
  hobbie: string;
  email: string;
  about: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private authenticationProvider: AuthenticationProvider,
    private userProvider: UserProvider
  ) {
    this.name = authenticationProvider.getCurrentUser().displayName;
    this.photoURL = authenticationProvider.getCurrentUser().photoURL;
    this.email = authenticationProvider.getCurrentUser().email;
    userProvider
      .getUser(authenticationProvider.getCurrentUser().uid)
      .valueChanges()
      .subscribe(user => {
        this.profession = user.profession;
        this.web = user.web;
        this.hobbie = user.hobbie;
        this.about = user.about;
      });
  }
  showConfirm(position: string) {}
  logOut() {
    this.authenticationProvider.logOut();
  }
}
