import { AuthenticationProvider } from './../providers/authentication/authentication';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
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
