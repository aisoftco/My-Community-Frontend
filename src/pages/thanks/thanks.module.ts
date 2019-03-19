import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThanksPage } from './thanks';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    ThanksPage,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(ThanksPage),
  ],
})
export class ThanksPageModule {}
