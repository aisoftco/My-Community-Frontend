import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { LoginPage } from '../login/login';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { UserProvider } from '../../providers/user/user';

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
    private userProvider: UserProvider
  ) {}

  ionViewDidLoad() {}

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }
  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
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
            displayName: this.name
          };
          this.userProvider
            .createUser(user)
            .then(cUserData => {})
            .catch(error => {
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
