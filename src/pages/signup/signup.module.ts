import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
@NgModule({
  declarations: [
    SignupPage,
    HomePage,
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
})
export class SignupPageModule {}
