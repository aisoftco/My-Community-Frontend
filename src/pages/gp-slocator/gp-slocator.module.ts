import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GpSlocatorPage } from './gp-slocator';

@NgModule({
  declarations: [
    GpSlocatorPage,
  ],
  imports: [
    IonicPageModule.forChild(GpSlocatorPage),
  ],
})
export class GpSlocatorPageModule {}
