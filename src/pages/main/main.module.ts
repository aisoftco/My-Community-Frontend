import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { LoginPage } from './../login/login';
import { SignupPage } from '../signup/signup';

@NgModule({
  declarations: [
    MainPage,
    LoginPage,
    SignupPage
  ],
  imports: [
  IonicPageModule.forChild(MainPage),
  ],
})
export class MainPageModule {}
