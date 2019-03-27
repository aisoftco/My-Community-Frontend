import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChatPrivatePage } from '../pages/chat-private/chat-private';
// Comandos
//$ ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
//$ npm install --save @ionic-native/geolocation@4
//GeoLocation
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup'; 
import { ThanksPage } from '../pages/thanks/thanks';
import { DireccionPage } from '../pages/direccion/direccion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPage } from './../pages/main/main';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    DireccionPage,
    ThanksPage,
    TabsPage,
    ChatPrivatePage
  ],
  imports: [
  
  BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    DireccionPage,
    ThanksPage,
    TabsPage,
    ChatPrivatePage
  ],
  providers: [
    StatusBar,
    //Importando GeoLocation
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
