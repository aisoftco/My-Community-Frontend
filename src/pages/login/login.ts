import { UserProvider } from './../../providers/user/user';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { SignupPage } from './../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: string;
  password: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authenticationProvider: AuthenticationProvider,
    private userProvider: UserProvider
  ) {}

  ionViewDidLoad() {}

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

  goToSignup() {
    this.navCtrl.setRoot(SignupPage);
  }

  login() {
    this.authenticationProvider
      .loginWithEmail(this.email, this.password)
      .then(data => {})
      .catch(error => {
        console.log(error);
      });
  }
  loginGoogle() {
    this.authenticationProvider
      .loginWithGoogle()
      .then((data: any) => {
        const user = {
          uid: data.user.uid,
          email: data.user.email,
          displayName: data.user.displayName,
          photoURL: data.user.photoURL
        };
        this.userProvider
          .editUser(user)
          .then(userData => {})
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
  loginFacebook() {
    this.authenticationProvider
      .loginWithFacebook()
      .then((data: any) => {
        const user = {
          uid: data.user.uid,
          email: data.user.email,
          displayName: data.user.displayName,
          photoURL: data.user.photoURL
        };
        this.userProvider
          .editUser(user)
          .then(userData => {})
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
