import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcountDetailsPage } from './acount-details';

@NgModule({
  declarations: [
    AcountDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AcountDetailsPage),
  ],
})
export class AcountDetailsPageModule {}
