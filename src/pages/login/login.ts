import { UsersProvider } from './../../providers/users/users';
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
    private usersProvider: UsersProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }
  goToSignup() {
    this.navCtrl.setRoot(SignupPage);
  }

  login() {
    this.authenticationProvider
      .loginWithEmail(this.email, this.password)
      .then(data => {
        alert('logeado');
        console.log(data);
      })

      .catch(error => {
        alert('error');
        console.log(error);
      });
  }
  loginGoogle() {
    this.authenticationProvider
      .loginWithGoogle()
      .then(data => {
        const user = {
          uid: data.user.uid,
          email: data.user.email,
          displayName: data.user.displayName,
          photoURL: data.user.photoURL
        };
        this.usersProvider
          .editUser(user)

          .then(userData => {
            alert('registrado');
            console.log(userData);
          })
          .catch(error => {
            alert('An error has occurred');
            console.log(error);
          });
        alert('logeado');
        console.log(data);
      })
      .catch(error => {
        alert('error');
        console.log(error);
      });
  }
  loginFacebook() {
    this.authenticationProvider
      .loginWithFacebook()
      .then(data => {
        const user = {
          uid: data.user.uid,
          email: data.user.email,
          displayName: data.user.displayName,
          photoURL: data.user.photoURL
        };
        this.usersProvider
          .editUser(user)
          .then(userData => {
            alert('registrado');
            console.log(userData);
          })
          .catch(error => {
            alert('An error has occurred');
            console.log(error);
          });
        alert('logeado');
        console.log(data);
      })
      .catch(error => {
        alert('error');

        console.log(error);
      });
  }
}
