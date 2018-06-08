import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KatakanaPage } from './katakana';

@NgModule({
  declarations: [
    KatakanaPage,
  ],
  imports: [
    IonicPageModule.forChild(KatakanaPage),
  ],
})
export class KatakanaPageModule {}
