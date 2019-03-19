import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DireccionPage } from './direccion';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    DireccionPage,
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(DireccionPage),
  ],
})
export class DireccionPageModule {}
