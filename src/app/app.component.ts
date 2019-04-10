import { AuthenticationProvider } from './../providers/authentication/authentication';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(
    platform: Platform,
    public authenticationProvider: AuthenticationProvider
  ) {
    this.authenticationProvider.getStatus().subscribe(auth => {
      if (auth == null) {
        platform.ready().then(() => {
          this.rootPage = LoginPage;
        });
      } else {
        platform.ready().then(() => {
          this.rootPage = HomePage;
        });
      }
    });
    platform.ready().then(() => {
      this.rootPage = LoginPage;
    });
  }
}
