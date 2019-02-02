import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { AcountDetailsPage } from '../pages/acount-details/acount-details';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { TermAndConditionsPage } from '../pages/term-and-conditions/term-and-conditions'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    AcountDetailsPage,
    ChangePasswordPage,
    TermAndConditionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    AcountDetailsPage,
    ChangePasswordPage,
    TermAndConditionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
