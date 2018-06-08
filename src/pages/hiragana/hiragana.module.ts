import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HiraganaPage } from './hiragana';

@NgModule({
  declarations: [
    HiraganaPage,
  ],
  imports: [
    IonicPageModule.forChild(HiraganaPage),
  ],
})
export class HiraganaPageModule {}
