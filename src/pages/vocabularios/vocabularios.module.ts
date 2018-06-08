import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VocabulariosPage } from './vocabularios';

@NgModule({
  declarations: [
    VocabulariosPage,
  ],
  imports: [
    IonicPageModule.forChild(VocabulariosPage),
  ],
})
export class VocabulariosPageModule {}
