import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChatPrivatePage } from '../pages/chat-private/chat-private';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ThanksPage } from '../pages/thanks/thanks';
import { DireccionPage } from '../pages/direccion/direccion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPage } from './../pages/main/main';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from '@angular/fire';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { HttpModule } from '@angular/http';
import { UsersProvider } from '../providers/users/users';

export const firebaseConfig = {
  apiKey: 'AIzaSyDHaK1C-4k5GbGTux_zksWuiON_X8EEsMU',
  authDomain: 'my-community-b9a96.firebaseapp.com',
  databaseURL: 'https://my-community-b9a96.firebaseio.com',
  projectId: 'my-community-b9a96',
  storageBucket: 'my-community-b9a96.appspot.com',
  messagingSenderId: '57045504554'
};

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
    HttpModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    HttpClient,
    HttpHandler,
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenticationProvider,
    UsersProvider
  ]
})
export class AppModule {}
