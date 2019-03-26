import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { LoginPage } from '../login/login';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  name: string;
  email: string;
  password: string;
  confPassword: string;
  acceptPrivacity: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authenticationProvider: AuthenticationProvider,
    private usersProvider: UsersProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }
  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
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
  register() {
    if (!this.acceptPrivacity) {
      alert('You have to accept the privacity policy');
    } else if (this.password == this.confPassword) {
      this.authenticationProvider
        .registerWithEmail(this.email, this.password)
        .then(data => {
          const user = {
            uid: data.user.uid,
            email: this.email,
            name: this.name
          };
          this.usersProvider
            .createUser(user)
            .then(cUserData => {
              alert('registrado');
              console.log(cUserData);
            })
            .catch(error => {
              alert('An error has occurred');
              console.log(error);
            });
        })
        .catch(error => {
          alert('The email entered is not available');
          console.log(error);
        });
    } else {
      alert('Passwords do not match');
    }
  }
}
