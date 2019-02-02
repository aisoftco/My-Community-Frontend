import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermAndConditionsPage } from './term-and-conditions';

@NgModule({
  declarations: [
    TermAndConditionsPage,
  ],
  imports: [
    IonicPageModule.forChild(TermAndConditionsPage),
  ],
})
export class TermAndConditionsPageModule {}
