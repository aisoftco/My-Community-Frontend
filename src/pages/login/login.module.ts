import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
@NgModule({
  declarations: [LoginPage, HomePage, SignupPage],
  imports: [IonicPageModule.forChild(LoginPage)]
})
export class LoginPageModule {}
